from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List, Annotated
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from fastapi import Request
import requests

app = FastAPI()

# Add CORS middleware to allow cross-origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (you can change this in production)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

models.Base.metadata.create_all(bind=engine)

# Pydantic models for data validation
class UserBase(BaseModel):
    FirstName: str
    LastName: str
    Email: EmailStr
    HashedPassword: str

    class Config:
        orm_mode = True

class UserCreate(UserBase):
    pass

class PlaylistBase(BaseModel):
    User_ID: int
    Song_ID: List[int]

    class Config:
        orm_mode = True

class PlaylistCreate(PlaylistBase):
    pass

class SongBase(BaseModel):
    Artists: str
    SongTitle: str
    Duration: int
    Genre: str

    class Config:
        orm_mode = True

class SongCreate(SongBase):
    pass

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
    
db_dependency = Annotated[Session, Depends(get_db)]

