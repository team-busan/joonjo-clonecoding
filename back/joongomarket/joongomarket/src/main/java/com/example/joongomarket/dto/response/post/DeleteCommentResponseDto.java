package com.example.joongomarket.dto.response.post;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.joongomarket.common.ResponseCode;
import com.example.joongomarket.common.ResponseMessage;
import com.example.joongomarket.dto.response.ResponseDto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeleteCommentResponseDto extends ResponseDto{
    private DeleteCommentResponseDto() {
        super();
    }

    public static ResponseEntity<DeleteCommentResponseDto> success() {
        DeleteCommentResponseDto responseBody = new DeleteCommentResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> existUser() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.NOT_EXIST_USER, ResponseMessage.NOT_EXIST_USER);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> existComment() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.NOT_EXIST_COMMENT, ResponseMessage.NOT_EXIST_COMMENT);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
    }

    public static ResponseEntity<ResponseDto> deleteCommentFail() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.DATABASE_ERROR, ResponseMessage.DATABASE_ERROR);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseBody);
    }
}
