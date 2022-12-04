package com.example.server.controller;

import com.example.server.dto.ApiResult;
import com.example.server.dto.ChangePasswordRequestDto;
import com.example.server.dto.MemberRequestDto;
import com.example.server.dto.MemberResponseDto;
import com.example.server.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {
    private final MemberService memberService;

    // 마이페이지
    @GetMapping("/status")
    public ApiResult<?> getMyMemberInfo() {
        MemberResponseDto myInfoBySecurity = memberService.getMyInfoBySecurity();
        return ApiResult.OK(ResponseEntity.ok((myInfoBySecurity)));
    }

    @PostMapping("/name")
    public ApiResult<?> setMemberName(@RequestBody MemberRequestDto request) {
        return ApiResult.OK(memberService.changeMemberName(request.getUserId(), request.getName()));
    }

    @PostMapping("/password")
    public ResponseEntity<MemberResponseDto> setMemberPassword(@RequestBody ChangePasswordRequestDto request) {
        return ResponseEntity.ok(memberService.changeMemberPassword(request.getUserId(), request.getExPassword(), request.getNewPassword()));
    }
}
