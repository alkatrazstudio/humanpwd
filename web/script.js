// SPDX-License-Identifier: AGPL-3.0-only
// 🄯 2022, Alexey Parfenov <zxed@alkatrazstudio.net>

import words from './words.js'

const WORDS_PER_PASS = 4
const PASS_COUNT = 7

function randomWordIndex()
{
    return crypto.getRandomValues(new Uint16Array(1))[0] & 0b11111111111
}

function newPassWords()
{
    const usedWordIndexes = []

    while(usedWordIndexes.length < WORDS_PER_PASS)
    {
        const newIndex = randomWordIndex()
        if(usedWordIndexes.includes(newIndex))
            continue
        usedWordIndexes.push(newIndex)
    }

    const wordsArr = usedWordIndexes.map(i => words[i])
    return wordsArr
}

function showNewPasses()
{
    const passElements = []

    for(let iPass = 0; iPass < PASS_COUNT; iPass++)
    {
        const passElement = document.createElement('label')
        passElements.push(passElement)

        const passWords = newPassWords()
        const wordElements = passWords.map(word => {
            const wordElement = document.createElement('span')
            wordElement.textContent = word
            return wordElement
        })
        passElement.replaceChildren(...wordElements)
    }

    passesRootEl.replaceChildren(...passElements)
}

async function registerServiceWorker()
{
    await navigator.serviceWorker?.register('./sw.js')
}

const passesRootEl = document.getElementById('passes')

passesRootEl.addEventListener('copy', event => {
    const selection = document.getSelection()
    const sanitizedPass = selection.toString().trim()
    event.clipboardData.setData('text/plain', sanitizedPass)
    event.preventDefault()
})

document.getElementById('update-btn').addEventListener('click', () => showNewPasses())

showNewPasses()
registerServiceWorker()
