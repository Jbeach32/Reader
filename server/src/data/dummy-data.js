const books = [
    {
      title: 'Six of Crows',
      author: 'Leigh Bardugo',
      description: 'Ketterdam: a bustling hub of international trade where anything can be had for the right price—and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams. But he can’t pull it off alone. . . .',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FSix-Crows-Leigh-Bardugo%2Fdp%2F1627792120&psig=AOvVaw2Z3PAJjidhPwMnhYJgUAnP&ust=1700764959654000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKie8Kuh2IIDFQAAAAAdAAAAABAI',
      link: 'https://www.amazon.com/Six-Crows-1/dp/1432896938/ref=asc_df_1432896938/?tag=hyprod-20&linkCode=df0&hvadid=658703646843&hvpos=&hvnetw=g&hvrand=9576004435921602199&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9029047&hvtargid=pla-1690519625728&psc=1&mcid=7efc332c163033c2ab6cb6cb9ba6af87',
    },
    {
      title: 'Napoleon: A Life',
      author: 'Andrew Roberts',
      description: 'The definitive biography of the great soldier-statesman by the New York Times bestselling author of The Storm of War—winner of the Los Angeles Times Book Prize for Biography and the Grand Prix of the Fondation Napoleon',
      image: 'https://www.amazon.com/Napoleon-Life-Andrew-Roberts/dp/0143127853',
      link: 'https://www.amazon.com/Napoleon-Life-Andrew-Roberts/dp/0143127853/ref=asc_df_0143127853/?tag=hyprod-20&linkCode=df0&hvadid=312021252609&hvpos=&hvnetw=g&hvrand=15167331962457627440&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9029017&hvtargid=pla-435230722737&psc=1&mcid=cc5ea21cd03a3a94974cbb2d6753f6bc&gclid=Cj0KCQiA6vaqBhCbARIsACF9M6k2881KnqCqE64zVqtj7dPd2OpKpmYm1D5YKK7mO8jM1bZRW48RW5gaAommEALw_wcB',
    },
  ];
  
  const users = [
    {
      id: '1',
      username: 'Jbeach',
      email: 'joshbeach2007@gmail.com',
      password: 'password1',
      savedBooks: [books[0], books[1]], // User 1 has saved Book 1 and Book 2
    },
    {
      id: '2',
      username: 'Abeach',
      email: 'abeach@example.com',
      password: 'password2',
      savedBooks: [books[0]], // User 2 has saved only Book 1
    },
  ];
  
  module.exports = { books, users };
  