Push-Location "$PSScriptRoot"
try {
    if(Test-Path zig-cache) {
        Remove-Item zig-cache -Recurse -Force
    }
    zig build-exe humanpwd.zig -target x86_64-windows -O ReleaseSafe -flto -fsingle-threaded -fstrip
} finally {
    Pop-Location
}
