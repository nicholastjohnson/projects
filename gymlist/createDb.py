from flask.ext.sqlalchemy import SQLAlchemy
from flask import Flask

app = Flask(__name__)
app.config.from_object('config')
db = SQLAlchemy(app)

class Gyms(db.Model):

    __tablename__ = "gyms"

    gymid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    zip = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    phone = db.Column(db.String, nullable=False)
    programs = db.Column(db.String, nullable=False)
    website = db.Column(db.String, nullable=False)
    contact = db.Column(db.String, nullable=False)

    def __init__(self, name, address, city, state, zip, email, phone, programs, website, contact):
        self.name = name
        self.address = address
        self.city = city
        self.state = state
        self.zip = zip
        self.email = email
        self.phone = phone
        self.programs = programs
        self.website = website
        self.contact = contact

    def __repr__(self):
        return '<name %r>' % (self.body)

db.create_all()

db.session.commit()