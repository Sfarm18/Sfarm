package com.example.server.controller;

import com.example.server.dto.ApiResult;
import com.example.server.dto.MemberRequestDto;
import com.example.server.dto.MemberResponseDto;
import com.example.server.dto.TokenDto;
import com.example.server.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/signup")
    public ApiResult<?> signup(@RequestBody MemberRequestDto requestDto) {
        try {
            return ApiResult.OK(authService.signup(requestDto));
        } catch (Exception e) {
            return ApiResult.ERROR(e, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ApiResult<?> login(@RequestBody MemberRequestDto requestDto) {
        return ApiResult.OK(authService.login(requestDto));
    }
}
