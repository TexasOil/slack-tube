# slack-tube
Slackbot that returns youtube video based on keyword

Clone this repo: 
<pre><code>git clone git@github.com:TexasOil/slack-tube.git</code></pre>
cd into directory
install packages:
<pre><code>npm i</code></pre>

Create heroku app: 
<pre><code>heroku create my-app-name</code></pre>

Set up YouTube API key as env variable: 
<pre><code>heroku config:add YOUTUBE_KEY=[your YouTube API token]</code></pre>

Push up to heroku: 
<pre><code>git push heroku master</code></pre>

Set up bot in slack by going to: http://[your-slack-team].slack.com/apps/manage/custom-integrations 
and add a slash command.
<p>The url will be https://my-app-name.herokuapp.com/post</p>
<p>In command you can do something creative like /youtube</p>

<p>To use just type /youtube "search term" in your slack channel</p>

Licence:
The MIT License (MIT) Copyright (c) 2016 Tyler Myracle

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

