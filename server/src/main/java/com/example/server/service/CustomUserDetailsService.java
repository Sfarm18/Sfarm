package com.example.server.service;

import com.example.server.entity.MemberEntity;
import com.example.server.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return memberRepository.findByUserId(username)
                .map(this::createUserDetails)
                .orElseThrow(() -> new UsernameNotFoundException(username + " 을 DB에서 찾을 수 없습니다"));
    }

    private UserDetails createUserDetails(MemberEntity memberEntity) {
        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(memberEntity.getMemberAuthority().toString());

        return new User(
                String.valueOf(memberEntity.getId()),
                memberEntity.getPassword(),
                Collections.singleton(grantedAuthority)
        );
    }
}