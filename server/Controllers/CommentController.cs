using CommentApi.Models;
using CommentApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CommentApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CommentController : ControllerBase
{
    private readonly CommentService _commentService;

    public CommentController(CommentService commentService) =>
        _commentService = commentService;

    [HttpGet]
    public async Task<List<Comment>> Get() =>
        await _commentService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Comment>> Get(string id)
    {
        var comment = await _commentService.GetAsync(id);

        if (comment is null)
        {
            return NotFound();
        }

        return comment;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Comment newComment)
    {
        if(newComment.User_ID != null){
            newComment.Created_At = DateTime.Now;

            await _commentService.CreateAsync(newComment);

            return CreatedAtAction(nameof(Get), new { id = newComment.Id }, newComment);
        }
        else{
            return Ok("pls login");
        }
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Comment updatedComment)
    {
        var comment = await _commentService.GetAsync(id);
        updatedComment.Updated_At = DateTime.Now;

        if (comment is null)
        {
            return NotFound();
        }

        updatedComment.Id = comment.Id;
        updatedComment.User_ID = comment.User_ID;
        updatedComment.Username = comment.Username;
        updatedComment.Subject_ID = comment.Subject_ID;

        await _commentService.UpdateAsync(id, updatedComment);

        return CreatedAtAction(nameof(Get),updatedComment);
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var comment = await _commentService.GetAsync(id);

        if (comment is null)
        {
            return NotFound();
        }

        await _commentService.RemoveAsync(id);

        return Ok("Delete Successfull");
    }
}