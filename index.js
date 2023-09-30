import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://info-sheet-8ee0d-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const commentInfoSheetInDB = ref(database, "commentInfoSheet")
const dateInfoSheetInDB = ref(database, "dateInfoSheet")
const timeInfoSheetInDB = ref(database, "timeInfoSheet")
const bpInfoSheetInDB = ref(database, "bpInfoSheet")
const pulseInfoSheetInDB = ref(database, "pulseInfoSheet")
const rmInfoSheetInDB = ref(database, "rmInfoSheet")
const oTwoInfoSheetInDB = ref(database, "oTwoInfoSheet")
const fdInfoSheetInDB = ref(database, "fdInfoSheet")
const bmuInfoSheetInDB = ref(database, "bmuInfoSheet")
const painInfoSheetInDB = ref(database, "painInfoSheet")
const mdInfoSheetInDB = ref(database, "mdInfoSheet")
const mtInfoSheetInDB = ref(database, "mtInfoSheet")
const lasixInfoSheetInDB = ref(database, "lasixInfoSheet")
const carvInfoSheetInDB = ref(database, "carvInfoSheet")
const morphInfoSheetInDB = ref(database, "morphInfoSheet")
const lorazInfoSheetInDB = ref(database, "lorazInfoSheet")
const ssoftInfoSheetInDB = ref(database, "ssoftInfoSheet")

const commentInfo = document.getElementById('comment-info')
const commentInput = document.getElementById('comment-input')
const commentSaveBtn = document.getElementById('comment-save-btn')

const dateInfo = document.getElementById('date-info')
const dateInput = document.getElementById('date-input')
const dateSaveBtn = document.getElementById('date-save-btn')

const timeInfo = document.getElementById('time-info')
const timeInput = document.getElementById('time-input')
const timeSaveBtn = document.getElementById('time-save-btn')

const bpInfo = document.getElementById('bp-info')
const bpInput = document.getElementById('bp-input')
const bpSaveBtn = document.getElementById('bp-save-btn')

const pulseInfo = document.getElementById('pulse-info')
const pulseInput = document.getElementById('pulse-input')
const pulseSaveBtn = document.getElementById('pulse-save-btn')

const rmInfo = document.getElementById('rm-info')
const rmInput = document.getElementById('rm-input')
const rmSaveBtn = document.getElementById('rm-save-btn')

const oTwoInfo = document.getElementById('o-two-info')
const oTwoInput = document.getElementById('o-two-input')
const oTwoSaveBtn = document.getElementById('o-two-save-btn')

const fdInfo = document.getElementById('fd-info')
const fdInput = document.getElementById('fd-input')
const fdSaveBtn = document.getElementById('fd-save-btn')

const bmuInfo = document.getElementById('bmu-info')
const bmuInput = document.getElementById('bmu-input')
const bmuSaveBtn = document.getElementById('bmu-save-btn')

const painInfo = document.getElementById('pain-info')
const painInput = document.getElementById('pain-input')
const painSaveBtn = document.getElementById('pain-save-btn')

const mdInfo = document.getElementById('md-info')
const mdInput = document.getElementById('md-input')
const mdSaveBtn = document.getElementById('md-save-btn')

const mtInfo = document.getElementById('mt-info')
const mtInput = document.getElementById('mt-input')
const mtSaveBtn = document.getElementById('mt-save-btn')

const lasixInfo = document.getElementById('lasix-info')
const lasixInput = document.getElementById('lasix-input')
const lasixSaveBtn = document.getElementById('lasix-save-btn')

const carvInfo = document.getElementById('carv-info')
const carvInput = document.getElementById('carv-input')
const carvSaveBtn = document.getElementById('carv-save-btn')

const morphInfo = document.getElementById('morph-info')
const morphInput = document.getElementById('morph-input')
const morphSaveBtn = document.getElementById('morph-save-btn')

const lorazInfo = document.getElementById('loraz-info')
const lorazInput = document.getElementById('loraz-input')
const lorazSaveBtn = document.getElementById('loraz-save-btn')

const ssoftInfo = document.getElementById('ssoft-info')
const ssoftInput = document.getElementById('ssoft-input')
const ssoftSaveBtn = document.getElementById('ssoft-save-btn')

const allInfoSaveBtn = document.getElementById('all-info-save-btn')
const allFbpSaveBtn = document.getElementById('all-fbp-save-btn')
const allMedSaveBtn = document.getElementById('all-med-save-btn')

// All Save Button

allInfoSaveBtn.addEventListener('click', function() {
    let dateInputValue = dateInput.value
    let timeInputValue = timeInput.value
    let bpInputValue = bpInput.value
    let pulseInputValue = pulseInput.value
    let rmInputValue = rmInput.value
    let oTwoInputValue = oTwoInput.value
    
    push(dateInfoSheetInDB, dateInputValue)
    push(timeInfoSheetInDB, timeInputValue)
    push(bpInfoSheetInDB, bpInputValue)
    push(pulseInfoSheetInDB, pulseInputValue)
    push(rmInfoSheetInDB, rmInputValue)
    push(oTwoInfoSheetInDB, oTwoInputValue)
    
    dateInput.value = ""
    timeInput.value = ""
    bpInput.value = ""
    pulseInput.value = ""
    rmInput.value = ""
    oTwoInput.value = ""
})

// All FBP Save Function

allFbpSaveBtn.addEventListener('click', function() {
    let fdInputValue = fdInput.value
    let bmuInputValue = bmuInput.value
    let painInputValue = painInput.value
    
    push(fdInfoSheetInDB, fdInputValue)
    push(bmuInfoSheetInDB, bmuInputValue)
    push(painInfoSheetInDB, painInputValue)
    
    fdInput.value = ""
    bmuInput.value = ""
    painInput.value = ""
})

// All Medicine Save Function

allMedSaveBtn.addEventListener('click', function() {
    let mdInputValue = mdInput.value
    let mtInputValue = mtInput.value
    let lasixInputValue = lasixInput.value
    let carvInputValue = carvInput.value
    let morphInputValue = morphInput.value
    let lorazInputValue = lorazInput.value
    let ssoftInputValue = ssoftInput.value
    
    push(mdInfoSheetInDB, mdInputValue)
    push(mtInfoSheetInDB, mtInputValue)
    push(lasixInfoSheetInDB, lasixInputValue)
    push(carvInfoSheetInDB, carvInputValue)
    push(morphInfoSheetInDB, morphInputValue)
    push(lorazInfoSheetInDB, lorazInputValue)
    push(ssoftInfoSheetInDB, ssoftInputValue)
    
    mdInput.value = ""
    mtInput.value = ""
    lasixInput.value = ""
    carvInput.value = ""
    morphInput.value = ""
    lorazInput.value = ""
    ssoftInput.value = ""
})

// Comment Function

commentSaveBtn.addEventListener('click', function() {
    let inputValue = commentInput.value
    
    push(commentInfoSheetInDB, inputValue)
    
    commentInput.value = ""
})

onValue(commentInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearCommentInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToCommentInfoSheetEl(currentItem)
        }    
    } else {
        commentInfo.innerHTML = ``
    }
})

function clearCommentInfoSheetEl() {
    commentInfo.innerHTML = ""
}

function appendItemToCommentInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info comment">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `commentInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    commentInfo.append(newEl)
}

// Date Function

dateSaveBtn.addEventListener('click', function() {
    let inputValue = dateInput.value
    
    push(dateInfoSheetInDB, inputValue)
    
    dateInput.value = ""
})

onValue(dateInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearDateInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToDateInfoSheetEl(currentItem)
        }    
    } else {
        dateInfo.innerHTML = ``
    }
})

function clearDateInfoSheetEl() {
    dateInfo.innerHTML = ""
}

function appendItemToDateInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `dateInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    dateInfo.append(newEl)
}

// Time Function

timeSaveBtn.addEventListener('click', function() {
    let inputValue = timeInput.value
    
    push(timeInfoSheetInDB, inputValue)
    
    timeInput.value = ""
})

onValue(timeInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearTimeInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToTimeInfoSheetEl(currentItem)
        }    
    } else {
        timeInfo.innerHTML = ``
    }
})

function clearTimeInfoSheetEl() {
    timeInfo.innerHTML = ""
}

function appendItemToTimeInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `timeInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    timeInfo.append(newEl)
}

// Blood Pressure Function

bpSaveBtn.addEventListener('click', function() {
    let inputValue = bpInput.value
    
    push(bpInfoSheetInDB, inputValue)
    
    bpInput.value = ""
})

onValue(bpInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearBpInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToBpInfoSheetEl(currentItem)
        }    
    } else {
        bpInfo.innerHTML = ``
    }
})

function clearBpInfoSheetEl() {
    bpInfo.innerHTML = ""
}

function appendItemToBpInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `bpInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    bpInfo.append(newEl)
}

// Pulse Function

pulseSaveBtn.addEventListener('click', function() {
    let inputValue = pulseInput.value
    
    push(pulseInfoSheetInDB, inputValue)
    
    pulseInput.value = ""
})

onValue(pulseInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearPulseInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToPulseInfoSheetEl(currentItem)
        }    
    } else {
        pulseInfo.innerHTML = ``
    }
})

function clearPulseInfoSheetEl() {
    pulseInfo.innerHTML = ""
}

function appendItemToPulseInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `pulseInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    pulseInfo.append(newEl)
}

// Respiration / Min Function

rmSaveBtn.addEventListener('click', function() {
    let inputValue = rmInput.value
    
    push(rmInfoSheetInDB, inputValue)
    
    rmInput.value = ""
})

onValue(rmInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearRmInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToRmInfoSheetEl(currentItem)
        }    
    } else {
        rmInfo.innerHTML = ``
    }
})

function clearRmInfoSheetEl() {
    rmInfo.innerHTML = ""
}

function appendItemToRmInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `rmInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    rmInfo.append(newEl)
}

// O2 Function

oTwoSaveBtn.addEventListener('click', function() {
    let inputValue = oTwoInput.value
    
    push(oTwoInfoSheetInDB, inputValue)
    
    oTwoInput.value = ""
})

onValue(oTwoInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearOTwoInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToOTwoInfoSheetEl(currentItem)
        }    
    } else {
        oTwoInfo.innerHTML = ``
    }
})

function clearOTwoInfoSheetEl() {
    oTwoInfo.innerHTML = ""
}

function appendItemToOTwoInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `oTwoInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    oTwoInfo.append(newEl)
}

// Food and Drink Function

fdSaveBtn.addEventListener('click', function() {
    let inputValue = fdInput.value
    
    push(fdInfoSheetInDB, inputValue)
    
    fdInput.value = ""
})

onValue(fdInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearFdInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToFdInfoSheetEl(currentItem)
        }    
    } else {
        fdInfo.innerHTML = ``
    }
})

function clearFdInfoSheetEl() {
    fdInfo.innerHTML = ""
}

function appendItemToFdInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `fdInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    fdInfo.append(newEl)
}

// Bowel Movement and Urine Function

bmuSaveBtn.addEventListener('click', function() {
    let inputValue = bmuInput.value
    
    push(bmuInfoSheetInDB, inputValue)
    
    bmuInput.value = ""
})

onValue(bmuInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearBmuInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToBmuInfoSheetEl(currentItem)
        }    
    } else {
        bmuInfo.innerHTML = ``
    }
})

function clearBmuInfoSheetEl() {
    bmuInfo.innerHTML = ""
}

function appendItemToBmuInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `bmuInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    bmuInfo.append(newEl)
}

// Pain Function

painSaveBtn.addEventListener('click', function() {
    let inputValue = painInput.value
    
    push(painInfoSheetInDB, inputValue)
    
    painInput.value = ""
})

onValue(painInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearPainInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToPainInfoSheetEl(currentItem)
        }    
    } else {
        painInfo.innerHTML = ``
    }
})

function clearPainInfoSheetEl() {
    painInfo.innerHTML = ""
}

function appendItemToPainInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `painInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    painInfo.append(newEl)
}

// Medicine Date Function

mdSaveBtn.addEventListener('click', function() {
    let inputValue = mdInput.value
    
    push(mdInfoSheetInDB, inputValue)
    
    mdInput.value = ""
})

onValue(mdInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearMdInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToMdInfoSheetEl(currentItem)
        }    
    } else {
        mdInfo.innerHTML = ``
    }
})

function clearMdInfoSheetEl() {
    mdInfo.innerHTML = ""
}

function appendItemToMdInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `mdInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    mdInfo.append(newEl)
}

// Medicine Time Function

mtSaveBtn.addEventListener('click', function() {
    let inputValue = mtInput.value
    
    push(mtInfoSheetInDB, inputValue)
    
    mtInput.value = ""
})

onValue(mtInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearMtInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToMtInfoSheetEl(currentItem)
        }    
    } else {
        mtInfo.innerHTML = ``
    }
})

function clearMtInfoSheetEl() {
    mtInfo.innerHTML = ""
}

function appendItemToMtInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `mtInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    mtInfo.append(newEl)
}

// Lasix Function

lasixSaveBtn.addEventListener('click', function() {
    let inputValue = lasixInput.value
    
    push(lasixInfoSheetInDB, inputValue)
    
    lasixInput.value = ""
})

onValue(lasixInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearLasixInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToLasixInfoSheetEl(currentItem)
        }    
    } else {
        lasixInfo.innerHTML = ``
    }
})

function clearLasixInfoSheetEl() {
    lasixInfo.innerHTML = ""
}

function appendItemToLasixInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `lasixInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    lasixInfo.append(newEl)
}

// Carvedilol Function

carvSaveBtn.addEventListener('click', function() {
    let inputValue = carvInput.value
    
    push(carvInfoSheetInDB, inputValue)
    
    carvInput.value = ""
})

onValue(carvInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearCarvInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToCarvInfoSheetEl(currentItem)
        }    
    } else {
        carvInfo.innerHTML = ``
    }
})

function clearCarvInfoSheetEl() {
    carvInfo.innerHTML = ""
}

function appendItemToCarvInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `carvInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    carvInfo.append(newEl)
}

// Morphine Function

morphSaveBtn.addEventListener('click', function() {
    let inputValue = morphInput.value
    
    push(morphInfoSheetInDB, inputValue)
    
    morphInput.value = ""
})

onValue(morphInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearMorphInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToMorphInfoSheetEl(currentItem)
        }    
    } else {
        morphInfo.innerHTML = ``
    }
})

function clearMorphInfoSheetEl() {
    morphInfo.innerHTML = ""
}

function appendItemToMorphInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `morphInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    morphInfo.append(newEl)
}

// Lorazepam / Anxiety Function

lorazSaveBtn.addEventListener('click', function() {
    let inputValue = lorazInput.value
    
    push(lorazInfoSheetInDB, inputValue)
    
    lorazInput.value = ""
})

onValue(lorazInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearLorazInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToLorazInfoSheetEl(currentItem)
        }    
    } else {
        lorazInfo.innerHTML = ``
    }
})

function clearLorazInfoSheetEl() {
    lorazInfo.innerHTML = ""
}

function appendItemToLorazInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `lorazInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    lorazInfo.append(newEl)
}

// Stool Softener Function

ssoftSaveBtn.addEventListener('click', function() {
    let inputValue = ssoftInput.value
    
    push(ssoftInfoSheetInDB, inputValue)
    
    ssoftInput.value = ""
})

onValue(ssoftInfoSheetInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearSsoftInfoSheetEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToSsoftInfoSheetEl(currentItem)
        }    
    } else {
        ssoftInfo.innerHTML = ``
    }
})

function clearSsoftInfoSheetEl() {
    ssoftInfo.innerHTML = ""
}

function appendItemToSsoftInfoSheetEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("p")
    
    newEl.innerHTML = `<p class="info">${itemValue}</p>`
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `ssoftInfoSheet/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    ssoftInfo.append(newEl)
}