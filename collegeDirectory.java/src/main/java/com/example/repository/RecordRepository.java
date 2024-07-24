package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {
}
