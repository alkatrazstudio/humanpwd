// SPDX-License-Identifier: AGPL-3.0-only
// 🄯 2022, Alexey Parfenov <zxed@alkatrazstudio.net>

const std = @import("std");
const words = @import("./words.zig").words;

const wordsPerPass = 4;
const passCount: u3 = 7;

pub fn main() anyerror!void {
    const stdout = std.io.getStdOut().writer();
    var wordIndexes: [wordsPerPass]u11 = undefined;

    var passesLeft = passCount;
    while (passesLeft > 0) : (passesLeft -= 1) {
        for (wordIndexes) |*index, pos| {
            index.* = while (true) {
                var newIndex = std.crypto.random.int(u11);
                var searchPos = pos;
                var exists = while (searchPos > 0) {
                    searchPos -= 1;
                    if (wordIndexes[searchPos] == newIndex)
                        break true;
                } else false;
                if (exists)
                    continue;
                break newIndex;
            } else 0;
        }

        for (wordIndexes) |index| try stdout.writeAll(words[index]);
        try stdout.writeAll("\n");
    }
}
