package com.plantplaces.plantplaces;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)

public class UserRepositoryTests {
@Autowired
private UserRepository repo;

@Autowired
private TestEntityManager entityManager;

@Test
public void testCreateUser()
   {
         User user = new User();
         user.setEmail("jayaverma20@gmail.com");
         user.setPassword("jaya@2020");
         user.setFname("Jaya");
         user.setLname("verma");
         user.setAge(25);
         user.setBloodgroup("O+");
         user.setGender("Female");
         user.setAdd("marathahalli, Bangalore, 560037");
         user.setMNo("9926558877");
         user.setDate("14/03/2021");
         
        User savedUser = repo.save(user);
        User existUser = entityManager.find(User.class, savedUser.getUid());
        
        assertThat(existUser.getEmail()).isEqualTo(user.getEmail());
   }
}
