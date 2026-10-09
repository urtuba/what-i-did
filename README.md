# what-i-did

Simple Personal Logger CLI

> Personal tool, 2022. Kept as a record; not maintained. Notes are stored as plain JSON in `~/.what-i-did/db/data.json`, so don't use it for passwords or other secrets.

## How to install

### zsh Terminals

Required: [node (16+ preferred) and npm](https://nodejs.org/)

Clone the repository to any location.

```
$ git clone https://github.com/urtuba/what-i-did.git
```

Enter to the directory.

```
$ cd what-i-did
```

Install

```
$ zsh INSTALL.sh
```

Then you can remove the cloned repository.

## Use

Use **what-i-did** for anything that you think it suits. It is tiny, robust and fast CLI application to take notes under different categories.

<hr>

After installation, the `wid` command is going to be available in your terminal.

Name of your notes is `log`. Logs can be created with multiple tags. Here is example:

```
$ wid log movie weekend
```

It creates a log with the tags movie and weekend, then asks for the note:

```
Note: Natural Born Killers (1994)
Sat Feb 19 2022 Natural Born Killers (1994)  ~ ~ [ movie, weekend ]
Log saved!
```

`ls`: You can list your old notes with options. `--tag=` brings results with a tag. You can have multiple tags in your query. With `--limit=` option, you can limit number of results to be shown.

```
$ wid ls --limit=3

Wed Feb 16 2022 Good morning  ~ ~ [  ]
Thu Feb 17 2022 Renew library card  ~ ~ [ todo ]
Sat Feb 19 2022 Natural Born Killers (1994)  ~ ~ [ movie, weekend ]
```

To delete everything (asks for confirmation):

```
$ wid reset
```

If you are confused:

```
$ wid help
```

## Known issues

- `INSTALL.sh` works only with zsh, adds the `wid` alias again on every run, and copies the folder inside itself when you install twice.
- The user name in `config.js` is hard-coded.
