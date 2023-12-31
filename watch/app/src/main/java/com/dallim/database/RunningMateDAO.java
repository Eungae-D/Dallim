package com.dallim.database;

import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.OnConflictStrategy;
import androidx.room.Query;

import com.dallim.model.RunningMate;

import java.util.List;

@Dao
public interface RunningMateDAO {

    // 러닝메이트 엔티티에 리스트 삽입
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insertRunningMate(List<RunningMate> runningMate);

    @Query("SELECT * FROM runningmate")
    List<RunningMate> getAll();
    
    // 모든 러닝메이트 데이터 삭제
    @Query("DELETE FROM RunningMate")
    void deleteAll();
}
