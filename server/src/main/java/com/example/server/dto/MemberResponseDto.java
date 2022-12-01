package com.example.server.dto;

import com.example.server.entity.MemberEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberResponseDto {    // Response를 보낼때 쓰이는 dto
    private String userId;
    private String name;
    private String location;

    public static MemberResponseDto of(MemberEntity memberEntity) {
        return MemberResponseDto.builder()
                .userId(memberEntity.getUserId())
                .name(memberEntity.getName())
                .location(memberEntity.getLocation())
                .build();
    }
}
