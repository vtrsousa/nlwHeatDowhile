const socialMediaLinks = {
  github: 'vtrsousa',
  youtube: '',
  facebook: '',
  instagram: 'vtrsousa',
  twitter: 'vtrsousatec'
}

function changeSocialMediaLinks() {
  //Percorrer a Dom
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    //variavel social = valor/nome da classe do filhos da li
    let newSocial =
      (li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`)

    console.log(newSocial)
  }
}

function getGitHubProfileInfos() {
  //template string
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  //Bater na url e trazer o que ela responder, no caso uma JSON
  //then() = promise
  //Arrow function
  fetch(url)
    .then(response => response.json())
    .then(data => {
      //trocar conteúdo da página
      userName.textContent = data.name
      userBio.textContent = data.bio
      //trocar href do link
      userLink.href = data.html_url
      //trocar src img
      userImage.src = data.avatar_url

      userLogin.textContent = data.login
    })

  console.log(url)
}

getGitHubProfileInfos()
changeSocialMediaLinks()
