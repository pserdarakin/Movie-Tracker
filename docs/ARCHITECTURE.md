# Tech stack and design

## 1. Movie Data Source
**Context**: Need reliable movie metadata  
**Options**:  
- TMDb API (free tier)  
- OMDb API (limited free tier)  
- Manual entry only  
**Decision**: TMDb API  
**Why**: Rich metadata (posters, genres, cast) + daily updated database  

## 2. State Management
**Context**: Need to handle watchlist/watched status  
**Options**:  
- React Context API  
- Redux Toolkit  
- SWR + useState  
**Decision**: React Context + SWR  
**Why**: Lightweight for MVP, easy to extend to Redux later  
