package com.example.stickynotes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    @PostMapping("/save-note")
    public String saveNote(@RequestBody Note note) {
        noteRepository.save(note);
        return "Note saved!";
    }
}
