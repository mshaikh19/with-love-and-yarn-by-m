from extensions import db

class Tutorial(db.Model):
    __tablename__ = "tutorials"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200))
    content = db.Column(db.Text)
    video_url = db.Column(db.String(300))