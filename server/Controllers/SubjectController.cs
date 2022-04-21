using SubjectApi.Models;
using SubjectApi.Services;
using Microsoft.AspNetCore.Mvc;
using UserApi.Services;
using SubjectApi.Controllers;
using UserApi.Controllers;

namespace SubjectApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SubjectController : ControllerBase
{
    private readonly SubjectService _subjectService;

    public SubjectController(SubjectService subjectService) =>
        _subjectService = subjectService;

    [HttpGet]
    public async Task<List<Subject>> Get() =>
        await _subjectService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Subject>> Get(string id)
    {
        var subject = await _subjectService.GetAsync(id);

        if (subject is null)
        {
            return NotFound();
        }

        return subject;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Subject newSubject)
    {
        if(newSubject.User_ID != null){
            newSubject.Created_At = DateTime.Now;

            await _subjectService.CreateAsync(newSubject);

            return CreatedAtAction(nameof(Get), new { id = newSubject.Id }, newSubject);
        }
        else{
            return Ok("pls login");
        }
        
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Subject updatedSubject)
    {
        updatedSubject.Updated_At = DateTime.Now;
        var subject = await _subjectService.GetAsync(id);

        if (subject is null)
        {
            return NotFound();
        }

        updatedSubject.Id = subject.Id;

        await _subjectService.UpdateAsync(id, updatedSubject);

        return NoContent();
    }

    [HttpPut("addcomment/{id:length(24)}")]
    public async Task<IActionResult> AddComment(string id, CommentSub comment)
    {
        var subject = await _subjectService.GetAsync(id);

        if (subject is null)
        {
            return NotFound();
        }

        comment.Created_At = DateTime.Now;
        subject.Comments.Add(comment);

        await _subjectService.UpdateAsync(id, subject);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var subject = await _subjectService.GetAsync(id);

        if (subject is null)
        {
            return NotFound();
        }

        await _subjectService.RemoveAsync(id);

        return NoContent();
    }
}