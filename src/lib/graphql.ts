export const loginUser = async (email: string, password: string) => {
  const response = await fetch('http://localhost:5000/api/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            token
            refreshToken
          }
        }
      `,
      variables: { email, password },
    }),
  });

  const result = await response.json();

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data.login;
};
