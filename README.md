# VisualEditor

VisualEditor provides a visual editor for wiki pages. It is written in
JavaScript and runs in a web browser.

It uses the Parsoid parser to convert wikitext documents to annotated HTML
which the VisualEditor is able to load, modify and emit back to Parsoid at
which point it is converted back into wikitext.

For more information about these projects, check out the [VisualEditor][]
and [Parsoid][] pages on mediawiki.


## Developing and installing

For information on installing VisualEditor on a local wiki, please
see https://www.mediawiki.org/wiki/Extension:VisualEditor

For information about contributing code to VisualEditor, see
[CODING.md][].  Patch submissions are reviewed and managed with
[Gerrit][].  There is also [API documentation][] available for the
VisualEditor.

[VisualEditor]:      http://www.mediawiki.org/wiki/VisualEditor
[Parsoid]:           http://www.mediawiki.org/wiki/Parsoid
[CODING.md]:         CODING.md
[API documentation]: https://doc.wikimedia.org/VisualEditor/master/
[Gerrit]:            https://www.mediawiki.org/wiki/Gerrit
