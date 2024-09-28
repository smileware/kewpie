async function saveData(formData) {
  console.log('SAVE DATA TRIGGER')
  const award = sessionStorage.getItem('award')

  const dataToSheet = new FormData()
  dataToSheet.append('gender', formData.gender)
  dataToSheet.append('age', formData.age)
  dataToSheet.append('kewpie', formData.kewpie)
  dataToSheet.append('preference', formData.preference)
  dataToSheet.append('consent', formData.consent)
  dataToSheet.append('taste', formData['รสชาติ'])
  dataToSheet.append('bowl', formData.bowl)
  dataToSheet.append('menu', formData.menu)
  dataToSheet.append('award', award)

  dataToSheet.forEach((e) => console.log(e))
  // console.log(dataToSheet.values())
  const deployKey = 'AKfycbyYAOQhFMsJcQF2wXEl_rxob-UEzgvawvCA_zlGzNpu0VRw3A1ksHMhJiNWa6pt3vAn'
  const url = `https://script.google.com/macros/s/${deployKey}/exec`
  await fetch(url, {
    method: 'POST',
    body: dataToSheet,
    mode: 'no-cors',
  })
    .then((response) => response.text())
    .then((data) => {
      console.log('Data submitted successfully')
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
