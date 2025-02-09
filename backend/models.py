from sqlalchemy import Column, ForeignKey, Integer, String, ARRAY
from database import Base

class User(Base):
    __tablename__ = 'users'

    User_ID = Column(Integer, primary_key=True, index=True)
    FirstName = Column(String, index=True)
    LastName = Column(String, index=True)
    Email = Column(String, unique=True, index=True)
    HashedPassword = Column(String, index=True)

class Playlist(Base):
    __tablename__ = 'playlists'

    Playlist_ID = Column(Integer, primary_key=True, index=True)
    User_ID = Column(Integer, ForeignKey("users.User_ID"), index=True)
    Song_ID = Column(ARRAY(Integer))

class Song(Base):
    __tablename__ = 'songs'

    SongID = Column(Integer, primary_key=True, index=True)
    Artists = Column(String, index=True)
    SongTitle = Column(String, index=True)
    Duration = Column(Integer, index=True)
    Genre = Column(String, index=True)