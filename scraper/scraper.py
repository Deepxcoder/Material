import firebase_admin
from firebase_admin import credentials, firestore
from newspaper import Article
import datetime

# --- PART 1: INITIALIZATION ---
# 'serviceAccountKey.json' is the file you downloaded from Firebase Console
cred = credentials.Certificate("scraper/firebase-key.json")
firebase_admin.initialize_app(cred)

# This 'db' object is your direct connection to Firestore
db = firestore.client()

def run_automated_scraper(url, category_name):
    # Standard newspaper3k logic
    article = Article(url)
    article.download()
    article.parse()

    # --- PART 2: THE DICTIONARY (SCHEMA) ---
    # We organize the data so the website can read it easily
    article_data = {
        "title": article.title,
        "image_url": article.top_image,
        "summary": "This is a placeholder for your AI summary...", # We can add AI here later
        "category": category_name,         # e.g., "Architecture" or "Computer"
        "source_url": url,
        "created_at": datetime.datetime.now() # Very important for sorting the feed
    }
    # --- PART 2.5: THE DUPLICATE CHECK ---
    # Check if this URL already exists in your Firebase to avoid spamming your feed
    docs = db.collection("explore_feed").where("source_url", "==", url).get()
    if len(docs) > 0:
        print(f"⏭️ Skipping: {article.title} (Already exists in database)")
        return
    # --- PART 3: THE UPLOAD ---
    # This adds a new 'Document' to a 'Collection' named "explore_feed"
    try:
        db.collection("explore_feed").add(article_data)
        print(f"✅ Successfully uploaded: {article.title}")
    except Exception as e:
        print(f"❌ Failed to upload: {e}")

# Example Run:
run_automated_scraper("https://techcrunch.com/example-news", "Computer Science")
