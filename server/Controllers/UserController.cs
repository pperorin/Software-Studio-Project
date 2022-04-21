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
            return NotFound();
        }

        return user;
    }

    [HttpPost]
    public async Task<IActionResult> Post(User newUser)
    {
        await _usersService.CreateAsync(newUser);

        return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, User updatedUser)
    {
        var user = await _usersService.GetAsync(id);

        if (user is null)
        {
            return NotFound();
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
            return NotFound();
        }

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

    [HttpPut("unlockban/{id:length(24)}")]
    public async Task<IActionResult> UnlockBanUser(string id, User updatedUser)
    {
        var user = await _usersService.GetAsync(id);

        if (user is null)
        {
            return NotFound();
        }

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

    [HttpPut("editPassword/{id:length(24)}")]
    public async Task<IActionResult> EditPassword(string id, User editUser)
    {
        var user = await _usersService.GetAsync(id);

        if (user is null)
        {
            return NotFound();
        }

        if (editUser.Password == user.Password){

            editUser.Id = user.Id;
            editUser.Password = editUser.NewPassword;
            editUser.NewPassword = null;

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
            return NotFound();
        }

        await _usersService.RemoveAsync(id);

        return Ok("Delete Successfull");
    }

}