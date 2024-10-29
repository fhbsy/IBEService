package com.project.ibe.controller;

import com.project.ibe.dto.MemberSignInRequest;
import com.project.ibe.dto.MemberSignUpRequest;
import com.project.ibe.dto.RegisterDTO;
import com.project.ibe.services.MemberService;
import com.project.ibe.services.RegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {

    private final RegisterService registerService;
    private final MemberService memberService;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody MemberSignUpRequest memberSignUpRequest) {
        return memberService.signUp(memberSignUpRequest);
    }
    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody MemberSignInRequest memberSignInRequest) {
        return memberService.signIn(memberSignInRequest);
    }




}
