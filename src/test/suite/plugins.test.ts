import * as assert from 'assert';
import { workspace } from 'vscode';
import { format } from './format.test';

suite('Test plugins', function() {
    this.timeout(10000);
    test('it formats with plugins', async () => {
        const { result } = await format(
            'index.php',
            workspace.workspaceFolders![2].uri
        );
        assert.equal(
            result,
            `<?php

array_map(
  function ($arg1, $arg2) use ($var1, $var2) {
    return $arg1 + $arg2 / ($var + $var2);
  },
  array(
    "complex" => "code",
    "with" => "inconsistent",
    "formatting" => "is",
    "hard" => "to",
    "maintain" => true
  )
);
`
        );
    });
});
