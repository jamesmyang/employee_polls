import React from 'react';


export const LoginPage = () => {

  return (
    <section className="center" style={{ width: "80%" }}>
      <img src="/employeepolls.png" alt="EmployeePolls Logo" />
      <h4 >Log in</h4>
      <form>
        <label htmlFor="user">User</label>
        <select
          id="user"

        >

          <option value=""></option>

        </select>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"

        />
        <button type="button" >
          Submit
        </button>
      </form>


    </section >
  );
}