using SubjectApi.Models;
using SubjectApi.Services;
using Microsoft.AspNetCore.Mvc;
using UserApi.Services;

namespace SubjectApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SubjectController : ControllerBase
{
    private readonly SubjectService _subjectService;

    public SubjectController(SubjectService subjectService,UsersService usersService) {
        _subjectService = subjectService;
        _usersService = usersService;
    }

    private readonly UsersService _usersService;

    [HttpGet]
    public async Task<List<Subject>> Get() =>
        await _subjectService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Subject>> Get(string id)
    {
        var subject = await _subjectService.GetAsync(id);

        if (subject is null)
        {
            return Ok("ไม่มีโพสเลย");
        }

        return subject;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Subject newSubject)
    {

        var user = await _usersService.GetAsync(newSubject.User_ID);

        if(user.IsBan != true){

            newSubject.Created_At = DateTime.Now;

            await _subjectService.CreateAsync(newSubject);

            return CreatedAtAction(nameof(Get), new { id = newSubject.Id }, newSubject);
        }
        else{
            return Ok("You are ban.");
        }
        
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Subject updatedSubject)
    {
        updatedSubject.Updated_At = DateTime.Now;
        var subject = await _subjectService.GetAsync(id);

        if (subject is null)
        {
            return Ok("ไม่มีโพสเลย");
        }

        updatedSubject.Id = subject.Id;
        updatedSubject.User_ID = subject.User_ID;
        updatedSubject.Username = subject.Username;
        updatedSubject.Title = subject.Title;
        updatedSubject.CountLikes = subject.CountLikes;
        updatedSubject.IsHide = subject.IsHide;
        updatedSubject.Created_At = subject.Created_At;
        updatedSubject.CountLikes = subject.CountLikes;
        updatedSubject.IsAnouncement = subject.IsAnouncement;

        await _subjectService.UpdateAsync(id, updatedSubject);

        return CreatedAtAction(nameof(Get),updatedSubject);
    }

    [HttpPut("anouncement/{id:length(24)}")]
    public async Task<IActionResult> Anouncement(string id, Subject updatedSubject)
    {
        var subject = await _subjectService.GetAsync(id);

        if (subject is null)
        {
            return Ok("ไม่มีโพสเลย");
        }

        if(subject.IsAnouncement != true){

            updatedSubject.Id = subject.Id;
            updatedSubject.User_ID = subject.User_ID;
            updatedSubject.Username = subject.Username;
            updatedSubject.Title = subject.Title;
            updatedSubject.Desc = subject.Desc;
            updatedSubject.CountLikes = subject.CountLikes;
            updatedSubject.IsHide = subject.IsHide;
            updatedSubject.Created_At = subject.Created_At;
            updatedSubject.Updated_At = subject.Updated_At;
            updatedSubject.CountLikes = subject.CountLikes;
            updatedSubject.IsAnouncement = true;

            await _subjectService.UpdateAsync(id, updatedSubject);

            return Ok("Add Anouncement Successful");
        }
        else{
            return Ok("This is Anouncement");
        }
        
    }

    [HttpPut("deleteanouncement/{id:length(24)}")]
    public async Task<IActionResult> DeleteAnouncement(string id, Subject updatedSubject)
    {
        var subject = await _subjectService.GetAsync(id);

        if (subject is null)
        {
            return Ok("ไม่มีโพสเลย");
        }

        if(subject.IsAnouncement != false){

            updatedSubject.Id = subject.Id;
            updatedSubject.User_ID = subject.User_ID;
            updatedSubject.Username = subject.Username;
            updatedSubject.Title = subject.Title;
            updatedSubject.Desc = subject.Desc;
            updatedSubject.CountLikes = subject.CountLikes;
            updatedSubject.IsHide = subject.IsHide;
            updatedSubject.Created_At = subject.Created_At;
            updatedSubject.Updated_At = subject.Updated_At;
            updatedSubject.CountLikes = subject.CountLikes;
            updatedSubject.IsAnouncement = false;

            await _subjectService.UpdateAsync(id, updatedSubject);

            return Ok("Delete Anouncement Successful");
        }
        else{
            return Ok("This is not Anouncement");
        }
        
    }

    [HttpPut("hide/{id:length(24)}")]
    public async Task<IActionResult> Hide(string id, Subject updatedSubject)
    {
        var subject = await _subjectService.GetAsync(id);

        if (subject is null)
        {
            return Ok("ไม่มีโพสเลย");
        }

        if(subject.IsHide != true){

            updatedSubject.Id = subject.Id;
            updatedSubject.User_ID = subject.User_ID;
            updatedSubject.Username = subject.Username;
            updatedSubject.Title = subject.Title;
            updatedSubject.Desc = subject.Desc;
            updatedSubject.CountLikes = subject.CountLikes;
            updatedSubject.IsHide = true;
            updatedSubject.Created_At = subject.Created_At;
            updatedSubject.Updated_At = subject.Updated_At;
            updatedSubject.CountLikes = subject.CountLikes;
            updatedSubject.IsAnouncement = subject.IsAnouncement;

            await _subjectService.UpdateAsync(id, updatedSubject);

            return Ok("Hide SuccessFull");     
        }
        else{
            return Ok("Hided");    
        }
    }

    [HttpPut("appear/{id:length(24)}")]
    public async Task<IActionResult> Appear(string id, Subject updatedSubject)
    {
        var subject = await _subjectService.GetAsync(id);

        if (subject is null)
        {
            return Ok("ไม่มีโพสเลย");
        }

        if(subject.IsHide != false){

            updatedSubject.Id = subject.Id;
            updatedSubject.User_ID = subject.User_ID;
            updatedSubject.Username = subject.Username;
            updatedSubject.Title = subject.Title;
            updatedSubject.Desc = subject.Desc;
            updatedSubject.CountLikes = subject.CountLikes;
            updatedSubject.IsHide = false;
            updatedSubject.Created_At = subject.Created_At;
            updatedSubject.Updated_At = subject.Updated_At;
            updatedSubject.CountLikes = subject.CountLikes;
            updatedSubject.IsAnouncement = subject.IsAnouncement;

            await _subjectService.UpdateAsync(id, updatedSubject);

            return Ok("Appear SuccessFull");     
        }
        else{
            return Ok("Appeared");    
        }
    }

    [HttpPut("like/{id:length(24)}")]
    public async Task<IActionResult> Like(string id, Subject updatedSubject)
    {
        var subject = await _subjectService.GetAsync(id);
        var user = await _usersService.GetAsync(updatedSubject.User_ID);
        string iduser = updatedSubject.User_ID;

        if (subject is null)
        {
            return Ok("ไม่มีโพสเลย");
        }

        if(user.IsBan != true && subject.CountLikes.Contains(iduser) == false){

            updatedSubject.Id = subject.Id;
            updatedSubject.User_ID = subject.User_ID;
            updatedSubject.Username = subject.Username;
            updatedSubject.Title = subject.Title;
            updatedSubject.Desc = subject.Desc;
            updatedSubject.CountLikes = subject.CountLikes;
            updatedSubject.IsHide = subject.IsHide;
            updatedSubject.Created_At = subject.Created_At;
            updatedSubject.Updated_At = subject.Updated_At;
            updatedSubject.CountLikes = subject.CountLikes;
            updatedSubject.IsAnouncement = subject.IsAnouncement;
            updatedSubject.CountLikes.Add(iduser);
            
            await _subjectService.UpdateAsync(id, updatedSubject);

            return Ok("Like SuccessFull");     
        }
        else if(user.IsBan != true && subject.CountLikes.Contains(iduser)){

            updatedSubject.Id = subject.Id;
            updatedSubject.User_ID = subject.User_ID;
            updatedSubject.Username = subject.Username;
            updatedSubject.Title = subject.Title;
            updatedSubject.Desc = subject.Desc;
            updatedSubject.CountLikes = subject.CountLikes;
            updatedSubject.IsHide = subject.IsHide;
            updatedSubject.Created_At = subject.Created_At;
            updatedSubject.Updated_At = subject.Updated_At;
            updatedSubject.CountLikes = subject.CountLikes;
            updatedSubject.IsAnouncement = subject.IsAnouncement;
            updatedSubject.CountLikes.Remove(iduser);
            
            await _subjectService.UpdateAsync(id, updatedSubject);

            return Ok("Unlike SuccessFull");     

        }
        else{

            return Ok("You are ban.");    

        }
    }

    [HttpGet("countlike/{id:length(24)}")]
    public async Task<int> CountLike(string id, Subject updatedSubject)
    {
        var subject = await _subjectService.GetAsync(id);

        if (subject is null)
        {
            return 0;
        }

        return subject.CountLikes.Count();     

    }

    [HttpGet("getuserlike/{id:length(24)}")]
    public async Task<ActionResult> GetUserLike(string id)
    {
        var subject = await _subjectService.GetAsync(id);

        if (subject is null)
        {
            return Ok("ไม่มีคอมเม้นอยู่เลย");
        }

        return CreatedAtAction(nameof(Get),subject.CountLikes);
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var subject = await _subjectService.GetAsync(id);

        if (subject is null)
        {
            return Ok("ไม่มีโพสเลย");
        }

        await _subjectService.RemoveAsync(id);

        return Ok("Delete Successfull");
    }
}