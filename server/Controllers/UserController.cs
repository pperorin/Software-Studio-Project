using UserApi.Models;
using UserApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace UserApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly UsersService _usersService;

    public UsersController(UsersService usersService) =>
        _usersService = usersService;

    [HttpGet]
    public async Task<List<User>> Get() =>
        await _usersService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<User>> GetId(string id)
    {
        var user = await _usersService.GetAsync(id);

        if (user is null)
        {
            return Ok("ไม่มีผู้ใช้งานเลย");
        }

        return user;
    }

    [HttpPost]
    public async Task<IActionResult> Post(User newUser)
    {
        var users = await _usersService.GetAsync();

        foreach(var i in users){
            if(newUser.Username == i.Username){
                return Ok("Duplicate");
            }
        }
        await _usersService.CreateAsync(newUser);
        return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, User updatedUser)
    {
        var user = await _usersService.GetAsync(id);

        if (user is null)
        {
            return Ok("ไม่มีผู้ใช้งานเลย");
        }

        updatedUser.Id = user.Id;

        await _usersService.UpdateAsync(id, updatedUser);

        return NoContent();
    }

    [HttpPut("ban/{id:length(24)}")]
    public async Task<IActionResult> BanUser(string id, User updatedUser)
    {
        var user = await _usersService.GetAsync(id);

        if (user is null)
        {
            return Ok("ไม่มีผู้ใช้งานเลย");
        }

        if(user.IsAdmin != true){

            if(user.IsBan != true){

            updatedUser.Id = user.Id;
            updatedUser.Username = user.Username;
            updatedUser.Password = user.Password;
            updatedUser.IsBan = true;

            await _usersService.UpdateAsync(id, updatedUser);

            return Ok("Ban SuccessFull");     
            }
            else{
                return Ok("Baned");    
            }

        }
        else{

            return Ok("This is Admin!!!");  

        }
       
    }

    [HttpPut("unlockban/{id:length(24)}")]
    public async Task<IActionResult> UnlockBanUser(string id, User updatedUser)
    {
        var user = await _usersService.GetAsync(id);

        if (user is null)
        {
            return Ok("ไม่มีผู้ใช้งานเลย");
        }

        if(user.IsAdmin != true){

            if(user.IsBan != false){

            updatedUser.Id = user.Id;
            updatedUser.Username = user.Username;
            updatedUser.Password = user.Password;
            updatedUser.IsBan = false;

            await _usersService.UpdateAsync(id, updatedUser);

            return Ok("Unlock Ban SuccessFull");     

            }
            else{
                return Ok("Doesn't Ban");    
            }

        }
        else{

            return Ok("This is Admin!!!");  

        }
        
    }

    [HttpGet("checkadmin/{id:length(24)}")]
    public async Task<Boolean> CheckAdmin(string id, User updatedUser)
    {
        var user = await _usersService.GetAsync(id);

        if (user.IsAdmin == true)
        {
            return true;
        }
        else{
            return false;
        }    
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(User getuser)
    {
        var user = await _usersService.GetAsync();
        var find = 0;
        var id = "";

        foreach(var s in user){
            if(s.Username == getuser.Username){
                id = s.Id;
                find = 1;
                if(s.Password == getuser.Password){
                    var users = await _usersService.GetAsync(s.Id);
                    return CreatedAtAction(nameof(Get), users);
                }
                break;
            }
        }
        
        if(find == 0){
            return Ok("Don't have user");
        }
        else{
            return Ok("Password wrong");
        }

    }

    [HttpPut("editPassword/{id:length(24)}")]
    public async Task<IActionResult> EditPassword(string id, User editUser)
    {
        var user = await _usersService.GetAsync(id);

        if (user is null)
        {
            return Ok("ไม่มีผู้ใช้งานเลย");
        }

        if (editUser.Password == user.Password){

            editUser.Id = user.Id;
            editUser.Password = editUser.NewPassword;
            editUser.NewPassword = null;
            editUser.IsAdmin = user.IsAdmin;
            editUser.Username = user.Username;
            editUser.IsBan = user.IsBan;

            await _usersService.UpdateAsync(id, editUser);

            return Ok("Change Password Succesfull");
        }
        else{
            return Ok("Wrong Password");
        }
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var user = await _usersService.GetAsync(id);

        if (user is null)
        {
            return Ok("ไม่มีผู้ใช้งานเลย");
        }

        await _usersService.RemoveAsync(id);

        return Ok("Delete Successfull");
    }

}