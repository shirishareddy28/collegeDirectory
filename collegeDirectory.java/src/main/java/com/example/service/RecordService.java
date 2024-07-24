package com.example.service;

import java.util.List;

import com.example.model.Record;

public interface RecordService {
    List<Record> getAllRecords();
    Record createRecord(Record record);
    Record updateRecord(Long id, Record record);
    void deleteRecord(Long id);
}
