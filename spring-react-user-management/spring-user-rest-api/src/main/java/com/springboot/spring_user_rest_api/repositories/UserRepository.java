package com.springboot.spring_user_rest_api.repositories;

import com.springboot.spring_user_rest_api.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
