package com.dinukakaveen.bumblebeebackend.controller;

import com.dinukakaveen.bumblebeebackend.model.Purchase;
import com.dinukakaveen.bumblebeebackend.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PurchaseController {

    @Autowired
    private PurchaseRepository purchaseRepository;

    @GetMapping("/Purchase/{userId}/{status}")
    public List<Purchase> getPurchaseByStatus(@PathVariable Integer userId,
                                              @PathVariable String status){
        return purchaseRepository.findByUserIdAndStatus(userId, status);
    }
}
