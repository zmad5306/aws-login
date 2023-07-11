# Windows Login Script for AWS with MFA

## Requirements

- node.js

## Installation

Run `npm i`

## Configuration

Create `.config` file in the root directory. Its contents should be:

```
{
    "VirturalVFADeviceARN": "<arn of your MFA device>"
}
```

## Usage

1. Open install folder in windows `cmd.exe`
2. Run `login <mfa token here>`
