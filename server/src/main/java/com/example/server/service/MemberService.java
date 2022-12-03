package com.example.server.service;

import com.example.server.config.SecurityUtil;
import com.example.server.dto.MemberResponseDto;
import com.example.server.entity.MemberEntity;
import com.example.server.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public MemberResponseDto getMyInfoBySecurity() {
        return memberRepository.findById(SecurityUtil.getCurrentMemberId())
                .map(MemberResponseDto::of)
                .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
    }

    // 이름 변경
    @Transactional
    public MemberResponseDto changeMemberNickname(String userId, String name) {
        MemberEntity memberEntity = memberRepository.findByUserId(userId).orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
        memberEntity.setName(name);
        return MemberResponseDto.of(memberRepository.save(memberEntity));
    }

    // 패스워드 변경
    @Transactional
    public MemberResponseDto changeMemberPassword(String userId, String exPassword, String newPassword) {
        MemberEntity memberEntity = memberRepository.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
        if (!passwordEncoder.matches(exPassword, memberEntity.getPassword())) {
            throw new RuntimeException("비밀번호가 맞지 않습니다");
        }
        memberEntity.setPassword(passwordEncoder.encode((newPassword)));
        return MemberResponseDto.of(memberRepository.save(memberEntity));
    }
}
