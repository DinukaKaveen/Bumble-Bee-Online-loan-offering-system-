package com.dinukakaveen.bumblebeebackend.repository;

import com.dinukakaveen.bumblebeebackend.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment,Integer> {
}
