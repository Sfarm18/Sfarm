package com.example.server.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "member")
@Getter
@Builder
@NoArgsConstructor
public class MemberEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String userId;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String location;

    @Enumerated(EnumType.STRING)
    private MemberAuthority memberAuthority;

    public void setName(String name) {
        this.name = name;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Builder
    public MemberEntity(Long id, String userId, String password, String name, String location, MemberAuthority memberAuthority) {
        this.id = id;
        this.userId = userId;
        this.password = password;
        this.name = name;
        this.location = location;
        this.memberAuthority = memberAuthority;
    }
}
