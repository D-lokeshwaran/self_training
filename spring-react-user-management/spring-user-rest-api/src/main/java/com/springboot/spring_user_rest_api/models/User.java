package com.springboot.spring_user_rest_api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Map;

@Entity
@Getter
@Setter
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String userName;

    @JsonIgnore
    private String password;

    @Size(min = 3, message = "Name should contain more than 3 characters!")
    private String name;

    private Integer age;

    private String gender;

    public void fillUser(Map<String, Object> body){
        if(body == null) return;
        String name = body.get("name").toString();
        String age =  body.get("age").toString();
        String gender =  body.get("gender").toString();
        this.setName(name);
        this.setAge(Integer.valueOf(age));
        this.setGender(gender);
    }

}
