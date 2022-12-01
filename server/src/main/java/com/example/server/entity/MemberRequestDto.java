package com.example.server.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberRequestDto {

    private String userId;
    private String password;
    private String name;
    private String location;

    public MemberEntity toMember(PasswordEncoder passwordEncoder) {
        return MemberEntity.builder()
                .userId(userId)
                .password(passwordEncoder.encode(password))
                .name(name)
                .location(location)
                .build();
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(userId, password);
    }

}
