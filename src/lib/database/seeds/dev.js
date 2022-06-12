/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      email: 'jason@test.com',
      name: 'Jason',
      password: 'password',  
    },
    {
      email: 'tim@test.com',
      name: 'Tim',
      password: 'password',  
    }
  ]);
}
