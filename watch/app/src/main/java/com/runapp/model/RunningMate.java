package com.runapp.model;

import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

import java.time.LocalDateTime;

@Entity
public class RunningMate {
    @PrimaryKey(autoGenerate = true)
    private Long id;
    @ColumnInfo(name = "object_id")
    private String objectId;
    @ColumnInfo(name = "user_id")
    private Long userId;
    @ColumnInfo(name = "nick_name")
    private String nickName;
    @ColumnInfo(name = "character_index")
    private int characterIndex;
    @ColumnInfo(name = "planet_index")
    private int planetIndex;
    @ColumnInfo(name = "level")
    private int level;
    @ColumnInfo(name = "average_pace")
    private double averagePace;
    @ColumnInfo(name = "total_distance")
    private double totalDistance;
    @ColumnInfo(name = "total_time")
    private double totalTime;
    @ColumnInfo(name = "is_clear")
    private boolean isClear;
    @ColumnInfo(name = "created_at")
    private LocalDateTime createdAt;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public int getCharacterIndex() {
        return characterIndex;
    }

    public void setCharacterIndex(int characterIndex) {
        this.characterIndex = characterIndex;
    }

    public int getPlanetIndex() {
        return planetIndex;
    }

    public void setPlanetIndex(int planetIndex) {
        this.planetIndex = planetIndex;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public double getAveragePace() {
        return averagePace;
    }

    public void setAveragePace(double averagePace) {
        this.averagePace = averagePace;
    }

    public double getTotalDistance() {
        return totalDistance;
    }

    public void setTotalDistance(double totalDistance) {
        this.totalDistance = totalDistance;
    }

    public double getTotalTime() {
        return totalTime;
    }

    public void setTotalTime(double totalTime) {
        this.totalTime = totalTime;
    }

    public boolean isClear() {
        return isClear;
    }

    public void setClear(boolean clear) {
        isClear = clear;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String getObjectId() {
        return objectId;
    }

    public void setObjectId(String objectId) {
        this.objectId = objectId;
    }

    @Override
    public String toString() {
        return "RunningMate{" +
                "id=" + id +
                ", userId=" + userId +
                ", nickName='" + nickName + '\'' +
                ", characterIndex=" + characterIndex +
                ", planetIndex=" + planetIndex +
                ", level=" + level +
                ", averagePace=" + averagePace +
                ", totalDistance=" + totalDistance +
                ", totalTime=" + totalTime +
                ", isClear=" + isClear +
                ", createdAt=" + createdAt +
                '}';
    }
}
