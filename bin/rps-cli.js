#!/usr/bin/env node

import minimist from 'minimist'
import { rps } from "../lib/rpsls.js"

var argv = minimist(process.argv.slice(2))

function printHelp() {
    console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`)
}

function printRules() {
    console.log(`Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`)
}


// Help
if (argv.h !== undefined || argv.help !== undefined) {
    printHelp()
    process.exit(0)
}

// Rules
if (argv.r !== undefined || argv.rules !== undefined) {
    printRules()
    process.exit(0)
}

try {
    let result = rps((argv._)[0])
    console.log(JSON.stringify(result))
    process.exit(0)
} catch (e) {
    printHelp()
    printRules()
    process.exit(1)
}