//initalize supabase client
let url = 'https://nhlgpgurjjiiooebsouf.supabase.co';
let supabaseAPIKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5obGdwZ3VyamppaW9vZWJzb3VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzMzIxNTEsImV4cCI6MjA0NTkwODE1MX0.W-SkTjLHni4SBBXTu0Ae_g9K9rM4HF-tJ9MgQ1VcXqc'

const database = supabase.createClient(url, supabaseAPIKey);

//getting the userdata after logging in/signing up
$(document).ready(async function () {
     const response = await database.auth.getUser();
     user = response.data.user;
     let { data, error } = await database.from("users").select('username').eq('id', user.id);

     $('#usernameText').text(`${data[0].username}`)

     $("#sidebar").on('mouseenter', () => {
          $("#sidebar").toggleClass('expand');
     }).on('mouseleave', () => {
          $("#sidebar").toggleClass('expand');
     })
});

