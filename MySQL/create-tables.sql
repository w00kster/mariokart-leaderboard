CREATE TABLE Cups (
    CupID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT
);

CREATE TABLE Maps (
    MapID INT AUTO_INCREMENT PRIMARY KEY,
    CupID INT NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    FOREIGN KEY (CupID) REFERENCES Cups(CupID)
);

CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL
    -- ,
    -- Email VARCHAR(255) NOT NULL,
    -- Password VARCHAR(255) NOT NULL
);

CREATE TABLE Leaderboard (
    LeaderboardID INT AUTO_INCREMENT PRIMARY KEY,
    MapID INT NOT NULL,
    UserID INT NOT NULL,
    OverallTime TIME NOT NULL,
    Lap1Time TIME NOT NULL,
    Lap2Time TIME NOT NULL,
    Lap3Time TIME NOT NULL,
    CreatedDate DATETIME,
    FOREIGN KEY (MapID) REFERENCES Maps(MapID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
