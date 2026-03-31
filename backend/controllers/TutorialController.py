from models.TutorialModel import Tutorial
from extensions import db

def createTutorial(data):
    tutorial = Tutorial(
        title=data.get('title'),
        content=data.get('content'),
        video_url=data.get('video_url')
    )

    db.session.add(tutorial)
    db.session.commit()

    return {"message": "Tutorial added"}


def getAllTutorials():
    tutorials = Tutorial.query.all()

    return [
        {
            "id": t.id,
            "title": t.title,
            "content": t.content,
            "video_url": t.video_url
        } for t in tutorials
    ]