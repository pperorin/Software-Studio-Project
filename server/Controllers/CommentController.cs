using CommentApi.Models;
using CommentApi.Services;
using Microsoft.AspNetCore.Mvc;
using UserApi.Services;

namespace CommentApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CommentController : ControllerBase
{
    private readonly CommentService _commentService;

    private readonly UsersService _usersService;

    public CommentController(CommentService commentService,UsersService usersService) {
        _commentService = commentService;
        _usersService = usersService;
    }

    [HttpGet]
    public async Task<List<Comment>> Get() =>
        await _commentService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Comment>> Get(string id)
    {
        var comment = await _commentService.GetAsync(id);

        if (comment is null)
        {
            return Ok("ไม่มีคอมเม้นอยู่เลย");
        }

        return comment;
    }

    [HttpGet("getuserlike/{id:length(24)}")]
    public async Task<ActionResult> GetUserLike(string id)
    {
        var comments = await _commentService.GetAsync(id);

        if (comments is null)
        {
            return Ok("ไม่มีคอมเม้นอยู่เลย");
        }

        return CreatedAtAction(nameof(Get),comments.CountLikes);
    }

    [HttpGet("getcommentsubject/{id:length(24)}")]
    public async Task<ActionResult> GetCommentSubject(string id)
    {
        var comments = await _commentService.GetAsync();
        List<Comment> Lscomment = new List<Comment>();

        if (comments is null)
        {
            return Ok("ไม่มีคอมเม้นอยู่เลย");
        }

        foreach(var comment in comments){
            if(comment.Subject_ID == id){
                Lscomment.Add(comment);
            }
        }

        return CreatedAtAction(nameof(Get),Lscomment);
    }

    [HttpPost]
    public async Task<IActionResult> Post(Comment newComment)
    {
        var user = await _usersService.GetAsync(newComment.User_ID);

        if(user.IsBan != true){
            newComment.Created_At = DateTime.Now;

            await _commentService.CreateAsync(newComment);

            return CreatedAtAction(nameof(Get), new { id = newComment.Id }, newComment);
        }
        else{
            return Forbid();
        }
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Comment updatedComment)
    {
        var comment = await _commentService.GetAsync(id);
        updatedComment.Updated_At = DateTime.Now;

        if (comment is null)
        {
            return Ok("ไม่มีคอมเม้นอยู่เลย");
        }

        updatedComment.Id = comment.Id;
        updatedComment.User_ID = comment.User_ID;
        updatedComment.Username = comment.Username;
        updatedComment.Subject_ID = comment.Subject_ID;
        updatedComment.IsHide = comment.IsHide;
        updatedComment.Created_At = comment.Created_At;
        updatedComment.CountLikes = comment.CountLikes;


        await _commentService.UpdateAsync(id, updatedComment);

        return CreatedAtAction(nameof(Get),updatedComment);
    }

    [HttpPut("hide/{id:length(24)}")]
    public async Task<IActionResult> Hide(string id, Comment updatedComment)
    {
        var comment = await _commentService.GetAsync(id);

        if (comment is null)
        {
            return Ok("ไม่มีคอมเม้นอยู่เลย");
        }

        if(comment.IsHide != true){

            updatedComment.Id = comment.Id;
            updatedComment.User_ID = comment.User_ID;
            updatedComment.Username = comment.Username;
            updatedComment.Subject_ID = comment.Subject_ID;
            updatedComment.Desc = comment.Desc;
            updatedComment.IsHide = true;
            updatedComment.Created_At = comment.Created_At;
            updatedComment.Updated_At = comment.Updated_At;
            updatedComment.CountLikes = comment.CountLikes;

            await _commentService.UpdateAsync(id, updatedComment);

            return Ok("Hide SuccessFull");     
        }
        else{
            return Ok("Hided");    
        }
    }

    [HttpPut("appear/{id:length(24)}")]
    public async Task<IActionResult> Appear(string id, Comment updatedComment)
    {
        var comment = await _commentService.GetAsync(id);

        if (comment is null)
        {
            return Ok("ไม่มีคอมเม้นอยู่เลย");
        }

        if(comment.IsHide != false){

            updatedComment.Id = comment.Id;
            updatedComment.User_ID = comment.User_ID;
            updatedComment.Username = comment.Username;
            updatedComment.Subject_ID = comment.Subject_ID;
            updatedComment.Desc = comment.Desc;
            updatedComment.IsHide = false;
            updatedComment.Created_At = comment.Created_At;
            updatedComment.Updated_At = comment.Updated_At;
            updatedComment.CountLikes = comment.CountLikes;

            await _commentService.UpdateAsync(id, updatedComment);

            return Ok("Appear SuccessFull");     
        }
        else{
            return Ok("Appeared");    
        }
    }

[HttpPut("like/{id:length(24)}")]
    public async Task<IActionResult> Like(string id, Comment updatedComment)
    {
        var comment = await _commentService.GetAsync(id);

        var user = await _usersService.GetAsync(updatedComment.User_ID);
        string iduser = updatedComment.User_ID;

        if (comment is null)
        {
            return Ok("ไม่มีคอมเม้นอยู่เลย");
        }

        if(user.IsBan != true && comment.CountLikes.Contains(iduser) == false){

            updatedComment.Id = comment.Id;
            updatedComment.User_ID = comment.User_ID;
            updatedComment.Username = comment.Username;
            updatedComment.Subject_ID = comment.Subject_ID;
            updatedComment.Desc = comment.Desc;
            updatedComment.IsHide = comment.IsHide;
            updatedComment.Created_At = comment.Created_At;
            updatedComment.Updated_At = comment.Updated_At;
            updatedComment.CountLikes = comment.CountLikes;
            updatedComment.CountLikes.Add(iduser);
            
            await _commentService.UpdateAsync(id, updatedComment);

            return Ok("Like SuccessFull");     
        }
        else if(user.IsBan != true && comment.CountLikes.Contains(iduser)){

            updatedComment.Id = comment.Id;
            updatedComment.User_ID = comment.User_ID;
            updatedComment.Username = comment.Username;
            updatedComment.Subject_ID = comment.Subject_ID;
            updatedComment.Desc = comment.Desc;
            updatedComment.IsHide = comment.IsHide;
            updatedComment.Created_At = comment.Created_At;
            updatedComment.Updated_At = comment.Updated_At;
            updatedComment.CountLikes = comment.CountLikes;
            updatedComment.CountLikes.Remove(iduser);
            
            await _commentService.UpdateAsync(id, updatedComment);

            return Ok("Unlike SuccessFull");     

        }
        else{

            return Ok("You are ban.");    

        }
    }

    [HttpGet("countlike/{id:length(24)}")]
    public async Task<int> CountLike(string id, Comment updatedComment)
    {
        var comment = await _commentService.GetAsync(id);


        if (comment is null)
        {
            return 0;
        }

        return comment.CountLikes.Count();     

    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var comment = await _commentService.GetAsync(id);

        if (comment is null)
        {
            return Ok("ไม่มีคอมเม้นอยู่เลย");
        }

        await _commentService.RemoveAsync(id);

        return Ok("Delete Successfull");
    }
}