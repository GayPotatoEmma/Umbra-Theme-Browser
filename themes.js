const themeData = [
    {
        id: "discord",
        name: "Discord",
        author: "gaypotatoemma",
        image: "themes/Discord/discord.png",
        description: "A theme inspired by our 'favorite' chat client, Discord.",
        code: "jZXdbtswDIXfxddFIFH/uWtToC2wYEUXYLt1HC0x5lmBY3cbir77FMeRZFtxcqvz+VCkSPojecwPmak2yfwj+Z6XG/Nn9pBmv7aVaUp7SEFiLpgEuBvLX/Ltrj4xUhBA2DPWUVdRaZXXhV6n1TDKJcw7IQocBBohT1W6yXVZ45somKRW+m+bkaIEScniwNemLvJSJ/OxvCjMQT80dW3KZI4xkYhTmKJcfooAF5Pos3m/kfzR5qiYQAKmwbOnTVhZU8UmaZd4V0GEvfu3rDJFcaxQZV/29KYUg0Iiguya3+uTC+YEKXkBcbe7wt1ndf6uo6B7UFAKBME9wTVwVF02tT41p1RCyCDXS01gj+04pevi+B1wRaWtAfXAfZbZDlyYwnQ1R4IJwu+Sl3Lf1MPBA2IvJaVTu04BYgcSu+Nxgv7cZ8CRtAQLxTCBYXxfeIoFa1MIL+FlzDGy7qFvpKVGQTsmEtnXjwiOKCcK0X7wgABglHAAGobw+mTePRt8dDrO1MqYY1fNXsq07Sl/MdxfU5dBiINXna46uFDnlSGIQIoHDucOAcLskji23WarR30V7L6B3CsdRpIqEXMJn9/9G05MsPex/ZqwgdSLYF9GYMEHSOA+sIjNshNCZ4Vs82GpekB01Tk1MiqB2h/29vjV7Jt9v7JCMcRo8OmAmfX+VDfTMEEPd0IoLnXZuJLZvxknw8/PhEteIW4XNkNxrD9ZHGMmaZy8XGuHRdrJ78OY56U3GOh+tUxAPhPLvZlCz1ZpaX9a9gpcUgaUdMfPOi3aAisiAAtCVCcsdaH14/7QSgoRZYelk153/w55lhZvabnVmzizTLfXkEWV/qxPsSlXXGJGO+UprXe66q4lFcF2BX5+/gc="
    },
    {
        id: "aetheris-ui",
        name: "Aetheris UI",
        author: "bonsaibnuuy",
        image: "themes/Aetheris UI/aetherisui.png",
        description: "A theme inspired by the Aetheris UI mod for Final Fantasy XIV.",
        code: "jZXbitswEIZfpfh6CdLonLvsFtpAlxaa0t7mIBJT1wqOvS0s++6dOIks2bI3N7nI/3k0/xyk12xh64Ot8tOHH8ts/pr9zMud+zt7XG9/7yvXlLtszkFTwTkw9jCUv+T7Q31hDNOK8Y5x1c5WrUQ4SELBS6u8LuxmXcWnKAP4I/UQez/Sp2q9y21Z05ZiFECJcQomqZX91zoyVFKqR4CvTV3kpc3mDADjCK6G3FPhTvaxqWtXTh4YcIHVO+jP7uV++NekpxD0YQ03UoERk7SvRKI937eVK4pzySpsdXKUOuTQ/Nm0iBRcgOIjSGdaEYV29Ai32Nb5i02CvsMgJRecRIKf6KF7VJ+b2uK0gsEkAWsOkeprQalQEiea8Ej/mJ/Wm6INIA3XmvLg8MV2i7P55Ap3sWck00bTh2xZHpu6v5K+41c12BEhlDD6pniz+IUghoX/39xIowkz4pxtJyZHvJ9L1w1OlWjthAl1MjaAYGvDAxJzNjjdMwovGEI0GabQFZUpSbhkpvNxySIgzj6YBIicptsyyCUK4yuycu48c7NluW4nrkuMtiAzWiulp0C4gCAF9q4Do0jh6gwBSAP+qOt0gNSG4B0gZBAkebvu9nZ85AZyV5lzFkRzo1JYYlhuTGJ8Iyk6ARdXUSV7SGLWrvpwBQIhar5fgwBIXodeva7Q+ZbBywQC3xPPRKt/c8fm2Ctx33yPmcXvXPDkTtIwQY8XvtWfbdmMli8ifCEMkYYoQdJY1EiJr5HQPE2O191jg9ECiutvcMFpOqbvB24CZ/jOSDIJ3sLeR3fesJiMSCb129t/"
    },
    {
        id: "windows-xp",
        name: "Windows XP",
        author: "gaypotatoemma",
        image: "themes/Windows XP/windowsxp.png",
        description: "Experience the nostalgia of the classic Windows XP interface.",
        code: "jZXbattAEIZfpfi6hJ3Z00zukhTaQEMDNdS3PohEVJWMLKWFkHfvSpa1u9JG5MZg/59nZ2b/mX1d/crLQ/X39GnzuLp+Hb5d3W73v5/qqi0Pq2uFjFIyK/t5Ln/Pn56bnpGWlNDCM1V9yOpOIrZWsIRRWudNke22dXyKZXQfhuaYj4RKCJI4Q77W20OelQ30qQAhyiDdKYU9pcgg6XmsdfbvXJFio5l1EvjRNkVeZqtrJNKGABKB7orqlN22TVOV5/qkIGv0EudL7U63yIv0t+pl6AtI7e7ILMGboTVWC1SL4Bj2Izlsxk64CgnY3Y/3wM99XRVF17LaXfU5pFCWGRLIc/tnd0ak0dK+hwTZGec4qd7hbvZN/pIlwcsNExhrQXAkjI5Oqg9tkzm3orOGQkSLkTr2ovurRdCR+iU/bXdF/3fj3EeglG/VzX7vnHlXFdWk9fflsW2mA6lIatulNqh+QjQJa8BclHmp/vdLLYZJSNZCheJYipinEFxBKo/Qlu5cjOJ60c0xosDEoQMDRrHLS80T8J3sFo8mQpBxDhEhlBSMEJ4U6mSdI62PEGTiMdeGdVV17rq6L7e9t3w+bu24YiSTC0VLIJ5BNFpo7cEoUjelbA1iEhh2lyANxImjBiegIRYMRpsgiF8uaIUbxH5fHJ6yqb0ItWE0IiFHfQNBis8jMMH8LffOwoAZkggnJBCi+F2eYM0EGWKzsG5TqFEM1/ZlaY1CNHqj2wMg8Kyf+lEdJqWzijEKg5LjqQfVdcQt2VF/rI7tcTq8kwQnzFX8mH2UxgXarwdy14pmkt9DVrZ+UQhgsJwmfCPce68kiTQW3eIimXxrYiy1dwDcY6NtOma4uhb0IZpUCOGNptBgDby9/Qc="
    },
    {
        id: "windows-98",
        name: "Windows 98",
        author: "gaypotatoemma",
        image: "themes/Windows 98/windows98.png",
        description: "Retrowave aesthetics meeting modern functionality.",
        code: "jZVfa9swFMW/ysjzCNKVLOnmre2gLaxssMD6mtgmNfWs4NjdoPS7T05U/bFlk5dCen6+vvfoXPl99btqCv339AXVavNuf61vd/nrodV9U6w2HJCjkIDZ16n8vTq8dGeGKADGhGd0W5Rt8vFt1dXlftfGb5EI5o9QU8xVUsAJUQwmyH27K6qy6eilFaY4ZWSWgkVqW/7rFtsegB99V1dNudpMn7+r9am87btON0ljEpyfUCqKZsTFqg/6zdqhJBUoFuHna6s+u7JX0c6ABP8rb3VdD0615oSTXnrkpf+ztz4pRQFnkPmhY+4m76q3Mu2OPVhFhZSUYCS4ICfVp74rTUgBRcYBQEKkOi+GRyXQLFK/Vafdvj4/LpCbGTn3Pd3kuQnkna71aFUem2Pfze6hVf1iZAQV4075HNUfjf//5ywCFWGYER6KYa7HLbgj8JEO+0jkx9ddFO1LLUMFR9MXnzbgnZzrISRSnkQ6MskVpjrxmFG3Wg/pWj82u3O2fD/mtmGmCTRJk2oJhAsIIiNZ5sGo0jASZowTlQIgDbhX2SSAMAMhFZkIiiQv4uJQTuLlyk/kyDdKFMfLCoyw5JJemOQNF0jRGwBBUilGiK2ORCJn3InTrAdCtHwu7wHgWw723ql2V4wqheAQDD3Ze8G5b/inPvbHsbv+O5Bi1qNv2JU0LNDznp/1p7LpZ82LCG/DsDNsDpts1yzpr5JxJB2WSpWgQCiydM34kzyr22qMAw3PM4UG18DHx38="
    },
    {
        id: "ubuntu",
        name: "Ubuntu",
        author: "gaypotatoemma",
        image: "themes/Ubuntu/ubuntu.png",
        description: "A clean Linux-inspired theme based on Ubuntu.",
        code: "jZXLbtswEEX/RevCIIfkkPQuD6AN0KAF6iLdyrbgCFVFQ5HSAkH+vZRs8yFRcra6R8N5XA7fsp/brm67bP2WPZX13vxd3ea734fGdPU+W3NQFCllFD9N5a/l4bkdGADUwAPGNPuiSf6+Kduq2ObN+BSiuJYwxa5H+tzk+7KoW7oY6ELBIrUp/g0VaSYBKKVJ4FvXVmVdZGsyke8q81Lcdm1r6j6M1FoqrdgS5yukRApYQr+Y10svmADGcAn+tVhHCLqwH6Jd9bY8RTUhyrfhx64xVdW3qbHjTXbaI8/dn+2AcEaUAj2D+KLRGkAoPsPd7NrydUhLSUSbXNDK2alawblYc40StIjUx64trENBo+AA46ApJ9jP9+VLvq2G/1BzpSjnHrjZ7awN70xlmpNFUFDCbPUP9bFrJ7dPEYV9TmfVmcX3/qRMa/TfL0WgVvYkQXgohjWMUwgMl8rDy/ZQRpUO43pXub5ODnXMuBqfgu8lk0igjyTjLAICQHCGAFGB6WlMconC0D5SP+yNMb3DVg91PvjLJ3ZaN4TYnkq5BEIavBrpagR31MUUkkmiMYgwFp7K/aEYe0za1Q0SVUL2PYlv8ggLbGLfAiaoZ/z6Bg2SShxJ0QlpxEeXdoCCcqc7z1MlBYFYiMbufB8ACYMG6vnOxNvEqe7ShF4569/NsTuOrnHwQKaYVfyGfZSGBXq+8YP+WNRdai1OCd8ILVEjV2ksGmSwqafkfN8dlrCW35OpmPEintXP0QDtmyO4wGXal6SIYAQZqvf3/w=="
    },
    {
        id: "frostui-purple",
        name: "FrostUI Purple",
        author: "zanthana",
        image: "themes/FrostUI Purple/frostui.png",
        description: "A cold, purple-themed interface.",
        code: "jZXLbtswEEV/pfC6MMjRcEhml6Roa6BBAzRFs/VDcISqoiFLaYEg/96xYpOUTMnZ6h4M585LL7PPtds3Pxcf7tt6V+azq5fZr6LauL/zm+X697Z2bbWZXWWGgDKLUn48l78V26cmzbh6k9dJ6aFoyny1rC+84rHLkb7Uy02RV418FwWT1EP+jx0hWElSGgVJ4HvblEXFJZNWAgkgwDPutnT7/KZtGldNPhhxJ6sIJpMAOvF6RH91z++HHyc9xaAPa9GSBqsmaV8JTkMg10KG6D/WtSvLQ8lqbnWHSJCUCZlAnto/qw4hhQo0jiDBtBaa7ZgR7nrdFM95EvQdBiJUKHrCcaJT7lm9a5ucpxUsJwlcc+ipvhYgjMg0aoM9/VOxX67KLgBZNEZi9Pj1es2zeetKdyq+kOYQYFHt2ma4khKVIiW9GgZHKKWVNSfFm+UZUcJm8feTG7KcrlUCYzE54sNcQjdQatXZiRMKMjdAcGvjBxJzdvb6kQFNBlBQFN+nEIqaaRLISxZ8vGUREQAKMwLoOU235SyXGJMaUJFlPw/OHWZuvqiW3cSFxAbHaByENHgx0sUI/qnjdAAZK/gGqCjv9HXdbPNm4i8wkENlDp0WBu3bYgywxLCcmMT49qSohYlExmbtqJ+vQCT0mu/XIAKS59CrxxU6XBk+JhD57u2Q5VuBZEywfO927S6ucML7gJmP/uYmaZigx+ve6Xd51Y5Wr0f4OlhBVmgl0lhvUoh/Rspgmhwvu8cSkxWuZipmOGmoLO+wtjAJHsNKo/mmGHmBDt64mJmgjMzr638="
    },
    {
        id: "catppuccin-mocha",
        name: "Catppuccin Mocha",
        author: "fmauneko",
        image: "themes/Catppuccin Mocha/catppuccinmocha.png",
        description: "Soothing pastel theme for the high-spirited.",
        code: "jZXdbpwwEIVfpeK6Wtnj/71LNlIbqatW6krtLQvWLgrFiEBaKcq7lyUIGxjT3vp8eGbOzJjX5JC2dd1lWVF9OLrsmib71+RHUeXu9+4+zZ4ujeuqPNlz0BQocC4/ruUvxeXaDgyRQIkmnnFNbptBAikMU2qSTkVb2nPazKMoYyQzQNfYv2/61KR5YauWoukuKdikTvbPUJHhwIQWDAW+dm1ZVDbZk5V8KN2zve/a1lWoMQj3HxUG9Gf3MsKmz9AIsQX/3CwlBKdro40IacSA71njyvJmUNM3Fq3dI9fu1xkteI74WjklUkgR4e6ytnixAyiEYNwEfY32sxem+TWgdO8nzNRj19phNg1lnCrGZyo2A/3xQ/Gcnsvbd6AI4YQw5mPeZVk/gAdXuuY9Jw6Eqt7qx6ru2l1sI0YVGZN3ZV2jPx+LCJPxYljDMgXv/bQqYR5Ia/y9k4hlNAYdGSSyt5ApYbQiAGIePCB6TRqupAlD4E1YpeCxPouTc7d52j1W6TBNPh86hOHAlWZ6CwQcnN0U+rkGAAemUOMIgNRaA9NCBZegr0h+scu5CtdyIePOrzDf+1WkjSSWnVOyb52Qmi4QdOkHHdvlSYgt3gQgQxmoftmDp2BS58s+HH9zdVfH/5QYs4v+qDZp2KDjfg/60VZd1LUZEa9/hm26PCPjdk/YaqKASqYoU8zgd8basND907IBBcv/9vYX"
    },
    {
        id: "vanilla-ui-dark",
        name: "Vanilla UI - Dark",
        author: "legiana",
        image: "themes/Vanilla UI - Dark/vanillauidark.png",
        description: "Dark mode version of the standard interface.",
        code: "jZXJbtswEIZfxdC5NTjD3bcsQGOgQQvUXa6yJDhCFNFQpLRAkHcv5aqiFlIRfPP/cTjLP9Rr9CMu86KIN9/3m4+b27h6jHav0c+8TM3v7XWcPJ4q05RptGOogAEVCj7M5c/56aH2M6ZKs+oioQBCBPbSIa+L7BhX01uElED0HHORQsinKk7zrKxhFYWL1CH7c6lIMy0kau4FvjR1kZdZtCMz+aYwz9l1U9emjHZAOAqlliBXHhDJcQm9My8tCRIEMCaBLcG/FosYgl3YlbSn9G9JZYqibU1lR+q1g0MemqdjZwuJUsoA0iWFUmlOCOc0wF0ldf5iswFqf5Zjg+yDk7SCc64QAFyxkXrf1Jl1JUXCGFPIx2f7FrQekghj9TZ/jo9FexwBqEY9BK6SxDrwxhRmshv78tzU08UjSklKZa96duqfMi/V/e+pxYnDaU5T8NhtmEdvG18ynWiTR7QXg+/SjvHc7FoYaoIjlKaM2OLI8AYnL2bgMHv6YEzrqu2+jC+ecunA2NJhEP3gu5HejdBfNXgLZ0G8L256ysK2msn+xs8wN/oZ45LgDKVdyYk02A6hJfLpURfa7r1gUvS6b517YTBwxm31gk0AjyEHqnffe9Xtu91mKrVirqqv5tycw99LH7OdfK5W0rhAh0d/0e+zsgm2b0SEGzHCQm/cnAz3vcfW+GoUs58HEqAouEayCP7/lqyjXW2CSk4ZEvX29hc="
    },
    {
        id: "anna-theme",
        name: "Anna Theme (Kirin Edit)",
        author: "serenkumara",
        image: "themes/Anna Theme (Kirin Edit)/annathemekirinedit.png",
        description: "A customized edit of the Anna theme.",
        code: "jZVda9swFIb/yvD1CPr+yF3awVpo2WCB7daxRWLmWsG1u0Hpf5/sppJsHzmDXOl9cnQ+Xh2/ZrumyT/tT+bJZNvX7GfVlPbP5iYvfh9b2zdltmVEMYE10ezzUn6ojqcOZmxbmnaQpMIaIYW8tK+62hzyNr4FI06EUkvmepivbV5WpunwmIeWkjBMkxRZpfbm71iOZlpIojkIfOu7umrMalK3tX02N33X2SbbrsqhQowkJ2vonX15J5VQTGsu1uBfq3XEoA/7X/Ra9T+K1tb10KbWzdZNlWJJFHG9BpBT/3QAi5kiITskKSaUJLhd0VUvY1qKYqQYi8yUnKoTvIVB9bHvTJlUV53g9C/Vc36oLwEwwRLpUOauKJwfb21tL+UJdwFyWd83576bv8GhdsylVy+uQR8HyxrD+aUISjlnjGKtYxGsYZ4C4Lw4jyD7hxUumA1QUOB2z6RTiHupuPthzqdZBGLSlXBMlVKaKyEUkEIcP2Sxt3Zw2Oa+yUd/hXzwdO2lQQKD80h+wEuAwIC/CtiRPgi4P8ujmRoMOg0N0ZwwObhmwYTB++w+mJWLZ9NKIoArLjr0or0QRUbM/UtpQiYAuPC8Gp48FlKK9z3i1cSTH/Xv9tyf099OiNnEXy9EiRbuS3idJiux040f9UfT9Mn2TYioEUwht8VhbLrkJKOMYZhM991j4MrBg7cYHPPqPGZg2lMQDZn07e0f"
    },
    {
        id: "transparent-toolbar",
        name: "Transparent Toolbar and Black Settings",
        author: "realraiden",
        image: "themes/Transparent Toolbar and Black Settings/transparentandblack.png",
        description: "Minimalist transparent toolbar with dark settings menus.",
        code: "jZXbattAEIbfxdfF7M6efRenkAYaWqihvbVl4YioWqNIaSHk3buSnT1oD+lNwPq/zM7M/jvzutq2++pptXld/Wy6o/6z3pqfp16P3XG1oSAR4Rio+hTLX5vT45BmdH+s+6S0a4a2Puz78BShwPzhMsY+jnTX749N3Q34vyi4HKcQ4io+blf/nStSWAqGgCaBb+PQNl292oCUjEuMGUTcbauf6+04DLor1udxXqlAEZKkGPWLfrnCmDAghJfgX8WafNCGVVRxAYoVadsJU5zEpqcSWf5H1eu2nVrWz/663A1SiiSQx/H34VK5AoEFzyCuaM5N2yXNcDfV0LzMaUnBuUnOa+X7DYMRGEWBYB0dV2/Uh3GoZ7cqJCFsue8KPHWaMk7CQz83z/tDOwXAApl7YFy5ADdVZbx5q1u98Pp9dx6H5ZPEhEpMqVWdcRZKbGf33VaT+idbDAHAAIxOHVzm4m7DXqyfkJMZY1JO1boDEj6LTreM89YyBddUwswTUwwTEWbhEVMdhEPYBqcDV1ROjUCJXDxMMfOcEcKmnp3Wk+fW991+dpxLzAwjzIUQgFkJM9MIsMCYK0cFQVDqOxSDX90Qx70Ks+WPpzq0lcUjzSs9y1yvKgKWuQTfC4FDA/mzZdZTY9oKLmy4DiyQnHFWda88FTz5MK76d30ez/m9lmLW2eVVpKMl5tHJhen0h7obs+0LCDcglDCziso0FrS7SOb7brHMcMmXkdlAWfDdqFxSwsyQLtOuNi6F5Mys+7e3fw=="
    },
    {
        id: "material-ui",
        name: "Material UI",
        author: "cptn_cosmo",
        image: "themes/Material UI/materialui.png",
        description: "Clean and flat Material Design inspired interface.",
        code: "jZbLbtswEEX/xevWIIfv7PIAkgA1GqQu2q1is7ZQVTJkKW0R9N87khU+JFrJxgvf4xnOzOXQL4vVx6/3i4uXxbe83Fa/l1fZ5ueurtpyu7jgoCmhhjPxYSp/ynf7Js1U9dbWnaSMkoZJ7aR13hT2KavfyOIwF8kQKYkCOkFu62yb27Khs4FeKZil1vZPX5EBgukoSQKf26bIS7u4YAAUQHAFE+66qI72qm2aqpxNGHC+1PfQd9XzK8wEMCbn4O89qKTkSvNZ0Id9D+06gYPW1BCifce+bOqqKLqW1ThqVxZVJoHs219PPcIocCHEGcSfjklBtDkX6nLT5M82CfoJY32Ck0hwjjacUmq0jNRV29iTWxVjRmqIVNcLSoWSaHzCI/0mP2ZPRRcApOFaUx4kv9xs0JvXVVGNvH5fHtpmfCVBgcGL5VRvHCKBc/+7abH++6AaA4pzHopJi4/P4qdBmCTGsPhAXsaBam1kmMCJhhuJ5YhEdsd4b42P4JvKlCTQRRq1JSC6OpgEiCpNj2VyliiM68i6qjrPLe/LrHecP9jrMtJCdfHOg5AGp5GGjTAFIA24VPFa6e+fC5LcrtudbWZegZHsO3Oqg5vTOhxhwb5CAzMRZEruvUCKMhD0ChdyhARrC8coKHe6uwJUK0EgFqLho4uNIDGQsGmgBlcI7xcEdc88E73+UB3aQ9xivIX4cXopU8zy7Ds3S8MM7RuPG0JRJWN9ZcvWtQ+XKGdEpQnfCInbRPIzgaJBSjSCkGdI33cqqQatp1hyD43MEcV08wCpsRfIkVlwCPtO2temiWBE9v95HqvCLtdZic8fOggDCeBs+PrOZkUf3zC8d92LMggrW1h7czj2kkFT4pUapIf932O+yYrHrNzZbZpZZbu3kOs6+9GccnOJDxkVfFBus2Zv6+FY2jCK6/Lfv/8="
    },
    {
        id: "material-ui-dark-red",
        name: "Material UI - Dark Red",
        author: "fabunova",
        image: "themes/Material UI - Dark Red/materialuidarkred.png",
        description: "A dark red variant of Material UI.",
        code: "lZXLbtswEEX/xevC4EMUSe8SB0gCxG2QGmi3tMTaQhjRkCW3RZB/Ly23fEik7G6y8D2aGd65ZN5nn/Wxe9s0YrZ4n32r6lL/nN+K4nXb6K4uZ4sMUc4whiD/NJafqu2uPTEMAJ4DBB2jm1I2589zTCiiVlpXrZIb0Qy7IPMnZ2PMVmKQc2z6jJD7RpSVrFt4HgXmCFCYpNAktZa/+hNxkHGME8CXrlVVLWcLjBBEiGQUjbil0gd527Wtrs8NGSOUZ1PcFaZ59IM+XvDFg79PnskHbVmOTFkC2CRtnYic8GvRaKVOljVm1dEoOWRnQnjuCjHLCE4gwXSmIElwN0VbHWUUTG/YCDbRPOM5RTz8bNW1sk8rI0aiKFQDLwb34aTfVQexUYkCN0VhsrnUSg92+ljvu3Z0JQmFFGOrRoJzVsaHdb9HTuPE6GGGs3gRZOYykcFATjbRyEkeNHCbNN9yhLNId8tQ4wcADIxH8E118fKnCAljT0aB3ytYS8YwgTTmRLzRWutT5uaPtegT5waDoXVpEMXBi5UuVrCt3As6LuK/ruaWEH5KZLmVw8j5t3sgx50ZYZGw/GO8Ad2z7EnxFQZIJGt/9dh9t0K4fJ7nBIRAJKaeGn0QrJp4HHv9We+7/dBi92jEmPng/9yVNJqgvXdjsLdeX8m6S9oXEGkjAmzS7oBM+26xa6IV1Ew80Enw/8oGZ7PlX7SS87WoX8MU9D8/SKFcaD1hJZWUd/tDRHre/T5UhVAvot7KMs6sxPYSsmzEjzba+160O9mE0sfHHw=="
    },
    {
    "id": "nox-aurum",
    "name": "Nox Aurum",
    "author": "noxtm",
    "image": "themes/Nox Aurum/nox-aurum.png",
    "description": "A nice dark theme with a slight touch of blue.",
    "code": "jZZbj5s8EIb/SpXrKhqf7b3bQw8rNW21XenrLUncLCrBEZjtrqr+9w5gwARIv1veJ+OZ8Tvj/F59di9vrquiOq6ufq/+S/O9+7W+SXY/D4Wr8v3qilNlJBOKyrdT+VN6ePKrKyoEp4RozQbGFXtbrK6g//KY+sxukyIOzqgBpogEPsVCgPp8AZwZNUE+FMk+tbknGAgz5Bq41IsUvUg92hdfH2aIxEIEnQW+VD5Lc1vnTQmlgqspd5u50t5U3ru8jqdBUqqVuMQNpWpQVFAiL9Ef3XMNE6mxb5QAXIK/X6wpBkPY/5fD974TCqTUwPiQxbdd4bKs7liBN91EJIJzytgM8lQdtw0iBRdU8QVkSA4jaUPNAne98+mzbUyjjeBGk6GK7oKplFxE+dZC8DGq3EhFjRipm8rb2qwau40t13qk9q2gzBjCcQrG+l1aJtusCSCkUETJ6PDr3Q6teesyd9b7+/xU+fEgAsEACoju1eCb2Aqt0hfLCBVgWPw9VFPbAn0JlMfirMPPcxlugxOFFwLjhGacNBxwUQyn94zSxABomKYQNVXh9pDMAB9nERF1HQzHcFTpoKNAtJES9EwuozB9Rx6dqz23vs+TxnFDYriLCJXAsDf1llkG6Tw4ihTvqylA54H+qGED97+Nl/L+YMcGi9OZyEMfCBoKx4TzuSjdclJMgKZhkFomnK0Adz5XZ9+H8OgMnNF6TM6Q2QXV6F8LdyhsWd4k/9S/YIwfmfsVOBCifXoarpsaQkATSsRIiPxCDJqANZMTAYNrDRMUhBypM1MXqdHYxQ9im707VafRIiCEciGI1kvMOnoZ4Z8QnULdYgFGjFFnuWxsXk0XzBwxFB2t1SkWXz6WL4nSC+Ryj3ts6sWprUcxh/0tNWf4DEm4CIawSzd1Rg+1aRAMJKvTeHCZXT8mefs64l0qYUz4/NEmWf+/hxg0chA2NrP27lS2kgLGVPebr0+vZbpLsockP9h9YDSaTBveHbdJDlMEp5QZCgG5LZIfvntnNcGd2R3wIfFPtggSw/GSBsvepOVu/e7lZAu00c6G8VOa4m6o73qqP9iydQSAxBOgzq6hbqvSu+OdzXBxIV2+TzNsGvai8OORnqXfHU/+dYAJrhAmSIDvqiLZplnqX7v9wCjgfmJB/3ZKi9RvXb4POt6rqP/VdIe54ymz3k65fpIbbpO8fLLPNrvP99ho3zzouEm45EqqwNSL2KenpWc9ZvoJ60enzaa9o41NsZNF/8cBKcbxH8+fP38B"
},
    {
    "id": "crystal-glass",
    "name": "Crystal Glass",
    "author": "kiwi.byte",
    "image": "themes/Crystal Glass/crystal-glass.png",
    "description": "Glass-like theme with pink accents.",
    "code": "jVVdb5tAEPwrFc+Rddz3+S2x0yRSrEappeYVw9VGPQOCI40V5b93sTFfPnBfmWFud3Zu79Nb5IfCBubbgwmKwpt/er/iJEr/zu6C8M82T8sk8uY+l4hLjAi6uYSf4+3OenOMuZCSMtXhpHmkc29OSPUzR0w20Dq2Rm+C/MopDe260kMeRLFOrD8pdGbhSdZaf0BHFCtfCoYwdRJ+lNbEia54QvoKIXkptDBpoe9Ka9Ok4kkmGKFCTPHOrU6U12E/pu8VGUpFimFF5BT57Ugk0BTBkzW8tbJUcYEVm2RPOfEzzFNjKstyGLWzrZayK/cbp099ynjTfd5taON37XZndMIA1Il2dQ/oqrQ6OqGIcoxED2288H0mOBYK9bWXcRFsTCVAMNggKUKtE7dhCNlcpCYdtPeUZKUdXEkhBPZ59XeN1sEB+zCoSoLPyGWz7fe6G7hXQsJpVHbBphmCsY8xowJf1tJMQ0LLSHDWL6iFGWNSKt49wJGzi9MbTputYQkdUwVHuFIS/Sq6tkMfhOO+DS2OuaJS+pQiRy09mcaRdZpWmZs9JcExcW1hsIwIwtA63Do0RcRu4lWlqwrNUXU6MJcQK58z3hFxbtdoq+3EKzCAW2cmaf2wML/DmShiMMIq4QoLX/ABpVUXMEbm0wZ33fcG6A1fIqIY6hOc67BBm4UgBecQU9xDnXeoxl/SrMy6FmPkQzI5YWiMMxt95ybZeII9bvwRX+mkHLWvx2iNUIIrTkeEeoPkHIIgRwTHfW9ojmh1l/2lZjMPuAmUMMo4miTWsv/JbnuTiBHEwdMb7zU1erYOEnj+oBMQgj1L6s+POjBHfUVgnQtCVA2stNF6mRVHSEEoJT1DL7tDEYeBeQ2SrY7cnFWwvUZZ5MFvezqbwrikz2iNPAR2p/O6LAkLBUJ5463iIpzdf2Q6h0SFsLxOV43AE0gYceGvuji/lQgyzSszjqxFWdh0v9QGNhOwi++xAdPAi3wQMyf7fp/ZQ0NuI3QkL8s82MQmtgd3gT+zOI/tJk2iGh+Wlu4zo62+5PWLWgUfz/pdm6ckAqPt6cWWlDOGFPn6+gc="
},
    {
    "id": "gotham-colorful",
    "name": "Gotham Colorful",
    "author": "noxtm",
    "image": "themes/Gotham Colorful/gotham-colorful.png",
    "description": "A nice transparent dark theme. Uses more colorful options for several elements (i.e. gearset switcher)",
    "code": "jVZdT9swFP0rVZ82iVX29XffoEyARDXUVYLXkHpttJBUacKYEP9912ma2E3a8epzcn0/zj3O+/gqjeLfo2URZbttVNisHH25yctN9PJ19G00u1+Mp+/jxyRb5X8mV8hcF3mVrcZTJoXijBGtL/rwfbLelOMpCMGBUq1Zx8mLlS3GUw6acJCEQgstkzK1z1Hh3wKMCoyiie7TmkggmDacqn6gmyJaJVgQxeso18DdhSdZMJ5KISRIJfuXLe1b6ZI2VGI9AgYJP6oyTTKLvQGgAIIP5DRL8529qsoyz/ZNkABaiXM8r2UMwypxNupt/vp58tPZmnxiG9ZwIxWYsxk/tZ0YGPPPuMjT1LWswEHXFCpwNIwNUDbVy3NNkYILUPwEpcuOKC79okPeZVwmr/u0NFVEUNOVcZgwSMkFJwHQ6HmoekTnVWndRmigRBLwNiJQBTBjKMdtCPHrZBc9p3UAgTtFlfQuv4xjlOYsT/Oj8u6ybVUGC8kJJYZpCrJFDxsiGeGuvfvjtlIUiMBP/POmFCcKVCUB7oOD+j5OpNMf7iTOlYTZdDCqDnsl/QsGRNa7veUoTQ0hmvRT8DqqJOGSGcLDLDyGq4PhEgaVdjgCVBspnQH1cgnCtB1Z5rkT3OQui2q5dYmhEYGSaJryHAuNCAgzwrnmgRXEoIRIycA4M+sT3OdSc4YL4xPaexpR+N92R4/Jam1DXUkgSkhjYADtGuAGSjQ3aojWzAxVCAK42m/dnnOQKENZU310HoTHzXTLcURpQuPOGBQb5S3cV7kHePOlBofGaqV7BF+JAoihAdptCb4qOE0ZoCeegRp/yLfV1u8uOQVNvNcL0J1xrxX8nw3ORoABFUwes0/0ugbnNqtOtixgeMV3XtinBbOT+MIIzYeZg09LSBuQEo5MGXw7h2N2puutwhliE/aT7K42TQTOn7k/hkWe2skyyvZPGhdCCWOa41sbpY1rGXx0cJoNMLeptdfb3R5ShDF1+OZh83eXxFG6iLK1XTUcjULFv53DdfNo3acwge7hpFJTZkX0q2wsV+NUhVNjjdxE5cYWB7MmwmDwi/E82cWT729bW6CcYrQlhxOGbq2UM/M+vrC7vSLQJ4BwRejHxz8="
},
    {
    "id": "gotham-desaturated",
    "name": "Gotham Desaturated",
    "author": "noxtm",
    "image": "themes/Gotham Desaturated/gotham-desaturated.png",
    "description": "A nice transparent dark theme. Uses more desaturated options for several elements (i.e. gearset switcher).",
    "code": "jVbLbtswEPwVw6cWaA1ySS5J3/JCEqBGi8RAclVk1haiSIYspSmC/HuXtixRluzmqhnuc3ZX7+PzNIqfR/MiyjbrqHBZOfpynZer6OXr6Pvo8up+PH0fPyTZIv8zOSfmssirbDGeClRaCsGM+daHfyTLVTmeglISODdGtJy8WLhiPJVgmARkHBponpSpe4qK0AsIrsiKYaZPqy2BEsZKrvuGrotokVBCnNxxaUB6h0dZMJ6iUgiose9s7t5KH7TlSPkoGCT8rMo0yRzVBoADKDkQ00Wab9x5VZZ5tisCAhitTvGCkgkyq9VJqzf56+fJjydzComNWSstarAnI35sKjHQ5vu4yNPUl6ygRm8pXFFrhBigrKqXpy0FlVSg5RFKGx3TEsOku7yzuExed2EZrpnitk1j32FAlEqyDlDreSh7QmdV6fxEGOAMGQQT0VEFCGu5pGno4pfJJnpKtwYUzRTXGDg/i2OS5kWe5gfp3WbrquwMpGScWWE4YIPuJwQFk768u89NpiQQRU/C73UqXhSkSgYyBAf1fRhIqz+aSeor60bTwqQ6qhWGDgZE1vPecLThljHD+iEEFdXIJArLZDeKgOHzEDSEnUxbnABuLKJfQL1YOmaaiszz3AtucptFW7m1gdEiAo20NPEUixYRMGGV35p7VscGZwxRgPXLrE/wz9FIQQMTEho/tSjCt+2nh2SxdF1dITCt0FoYQNsC+IYyI60eotU9IxWCAql3U7fj7CUqSNbcHHzvmKfJ9MNxQKlN08xYEhuXDdxXeQAE/eWWmia2Sg8IoRIVMMs7aDsldFWom9hBj5yBLf4rX1frsLrsGDQJrhfQdqa51vB/Nvg1AgK4EnjIPlLrLThzWbUvGadOcrIwzGiSP03r9A7pwigjh5mDp6VLG5AStUxbup3DNtulG4zCCWJt9pPsNjfDFPVf+D+Guzx1k3mUPXtRAaPx1ELVn29clG7tc/87Q8dM18DMpc5drjc7iK6g4vs3v1Z/N0kcpXdRtnSLhmMN/QzJ/fNo2adYkIIprCkXRfS79L45Cq2ZlXL/+DoqV66oIQGKAiZolmziydXb2hUkp5jWkq+2kKh8rwfxO7fZ3T/GKTiv1Y+Pfw=="
},
    {
    "id": "catppuccin-mocha-pink-frosted",
    "name": "Catppuccin Mocha - Pink Frosted",
    "author": "magesnmiceys",
    "image": "themes/Catppuccin Mocha - Pink Frosted/catppuccin-mocha-pink-frosted.png",
    "description": "Pink frosted take on the memorable Catppuccin Mocha theme.",
    "code": "jZbJTuswFIZfBXWNKk+J7buDMkpUIEC6d+umprUwceQ4DEK8+3VCxsYJbLro//Wc/wy2+7lYCZcVSaLSo7VJ9uLoTqXPRxfW5E5uF38+F39VujVvy1ORPO+sKVL/JUEMxAgCBo7H8o3a7V3FQAQRIXHHGLuVNvjzR+W03Ag7zEI58h8xG2M/R7q0Yqtk6mDQyiGFZmM9yveqIo4x8zoKAreF0yqV3755jBinI26lTS5PC+dMOpuwx/2i1B59ZV5rGDIQgXkL/2Zr6oNtWE58WTHBs3SvEwwQFAPYRX9IrNG6bJn1ow7OpkP2xcumygoAZ4DzCaRz54v2/sgEd5I49Sq/QQIohr0yJifshXajx9V7dV1UB6VyieKYRAN1diu8fqZysdFlABQzhjCiUdeJkyTxu7ky2tjaHGV+rMeL6zQr3OSRrNV2cShnnGHW/m5cbPd9oJpObIvBCCGKGSyLOfTSrSBjBPowQ0O9DSWUQDBI0NszhHHEUCB7y1BOAaAxHlvomlq2BaEI9YxWLvoE5ZBGkNJ+rvBYRl7CYR6NKXdueZ2KauM6Y3DoaBpEYfAwUnt0xgAKA22q3nYc+g5fOduddDOvwIEcHsEICyxLwwTWdyCFez9AArtW63fW7KzM81NhyxFzDijjYf3Wx3jS5q3iYuidgC5P6N5ohamz3QKBde+pwYulVSculm/3Jiuy6ac0xCyH7+XhYKdoNENPb1Glr2VaTLZvQEw3YoDNtntATve9xX6zooOYP87jAAxcYzN0V5u//zGIcTnJe6Pl8lGk/hlFPAIRhxGj9ddXUugyvi8RE4Cqx7MS1lJLeZbllQQ5jgCCtXS3/8hVIvS9SHdy2zDYvzoEN3HXYjdG/OPs620crax4cnXuoXIp3F7axlYTd63yZHn+nknrNyqR1ZEsuw0xQ6W3sX4v82Yj2iexolZF7szLmdT+hvN0fqG0b5rvhXX1/wPq6yUT9PlL5j5amMUx9A1t4LPCio3Syn2EDT5kyiq3Mem21g+tmZdMSydDXL37FbcW7zfyVerrdOsb7UwoVnlROzU84QDiKKYAsiHTnjDCY+q3pHHzPaO1VL6TtvuHQTgmPCJfX/8B"
},
    {
    "id": "els-color-profile",
    "name": "El's Color Profile",
    "author": "etermin",
    "image": "themes/El's Color Profile/els-color-profile.png",
    "description": "Nice dark theme with some pink/purple accents.",
    "code": "jZbJbtswEIZfpfCll8DgvvTWLG0D1GiRBmivss04QhnRkKg0QdF370iWSVGik/igg+fTLP/MkPq7uLLvm3cXzrr63ffa3ZXWLD78Xfwsq637szwvNr93tWur7eIDIwpRgbSmZ3Pz13J373sGC4yAi4yrt6buTFJj+CkeTLelt2Zd1GkUqQk8hJpjwZMiDCFFyQz5XBfb0lQeH1IBEGl+kiKHcBohoefhbs1TX5HGSnJEWBb41npbViAZJQQTwpmcJ3VhXWPOW+9d9WJ9I+4NpY7oL+5xgDHlhI7Ez8C/XqxpDAa3mmkhSUbIMR2UgOIUBk0VCvyPTe2s7SSrodXZUYrIffuwPlSuicRSnEBi0UJgzBU7wX3c+PKxT0tJISC5kZTHDhMwcIYSQ5joefVgXbXewLQSLTgjZOo0aAGJSQEdRyyxX5ZNsba9A6GZUpiNgn/cbGA2+42EsZJUMi6UkmeL62rf+slKRqkHa2ZwDpb5OMf/j9XAGiCqOUqM2RGf5hK7ERo7TiiaOedKaTEOkJmzWfTAzAoOKURRqRSIdJ5kmsWI6OqggqQy5NsyyyVxExS5da6bueV1VfQTFxPDbwVJHkw89ccaYlKpHEBSiWahhukgQjHKYa5GTJwcWDtGKOp3c7szs5GDaSZcoow5KgNpUi0lRTiDxWmYMXF886YkAhIKNoNMkOhdwhBIEhOF+21Xm6Y5L3oNNBdSw37l7N/Ax511f7qOUMI5EkwHLqzS6GQIhiRDBa/BIwGyx2qwDqvY7SnCSrP03bCLhGPB+xWP2bt9u3+lVRNmmdyXcDFROB1ep8kLvk83sLevTNWelC8hTguRYC/KnZCndQ9YbkTDtuV8vtqPCTi4fSMdawPuxlmzvC0quD6pQlxyyaQe/v5iCtv5pVozSQnGR35lrDGX+6a7qeBcVnAf4cH0/f65KTeFvSmqndn2DIWbAbrKUXi92E0RDU4kbN4x9EVd3Pm+JmiRFhBBDJbPhb839cFElaYYjtuzxapsNsurp72pYZI2pl/FblgIkpTTnP3GNMdJQBQWsfty6qmLtvHu4dJYONmAbj6VFsQCLerJRZelrx72/jnA8SOihy/buliXtvTP+QR/7Mu69GtXbQf7NDX3sLfGmzmXJrUqnr6aR2Ovqy0I7d0hFhNw4OhjrO6A9mW62Qg+9ISEvUiZ+WYdsjn0aGVKULIevix6ijLN2b9//wE="
},
    {
    "id": "akios-blue-midnight",
    "name": "Akio's Blue Midnight",
    "author": "akionakao",
    "image": "themes/Akio's Blue Midnight/akios-blue-midnight.png",
    "description": "A nice dark blue theme.",
    "code": "jZbZTuMwFIZfBfVmblDlfeGOZQaQqECAxNymjadYY+IqcViEePdxltrZmuE2/9fjs/zH7ufi9K+2P4qjM1Oqo5VOM719douTz8WTzlL7tjxLNn+3uS2zdHFCkAAAQwr48Vi+aX5YMZwSyWFkbJ6qfHFCoSSUgPD9UTuj1kn+nyMC1oaZQS7zJNUqc/BbFJqlHtV7XY4kknEk6SRwWzqjMzUb6NzYQp2Vztnsu9y+VMgF8L+YQ6/sa9MULiUHFMzCv+uCoOAUIDILhrAHy+/SnTZwASUAIk75YZNbY6p+5X7OixMEOZAQT+jP5cu67hDGgjAEDiAhNcEYhFSQA9zpxunXZjScMZ8ZijXsZ4u80LOkF4KRx6V7dVU65X2KJKMEoWHQ0AifGGd+JoD09AtdJGtTB2CSCAFJ5/DTzca78twa23aeUg6r8q6zXelGm7jfslaN2xHa1yih2DD3+H1fDZMCYElBTwzFIAKphBKCiVziNAbHNglFmVIqhGTdAyZMNjo9+jsYa5hCbCrmDKAqEu9n0SEQogQz1G/D9FhGufTCwCpSNf5HayvPLa+zpHZcTAzWIJZCcC7mQNSAiFFAaQR7kbo3xxhA00A4qnUHYkL67WOUdYJMOOdJp1s1shwkXBBMJ+TYmf79P8AmzLJnYhKjUwYj9IhfXA45GyBt9M4zU4t3ud3mqijOktZHvtEAT+q3PsAfY9/qQwgkGFMZuPEedYSeg8IudYDJCzWo7R72r6qghkXs2m6fvd2Vu8Mv6BSzPPhMztJoho7TG46m1lcqKw+2r0fERkjOJCNiGuu5ofMMjMnDfQ/Yd/zZixkvRlY5lVA2D7Zhv0nH2gSgGDDMfBPurVHLxySrHlBJfCCKCG4/X6nE1PEl5v51xVi2wkoZpS52RS1Jb0pB9tLd80ehN4m5T7KtSqeZVbL9H3KeJ39cczbx4xKQkla5TNyzytu0hMTQ37nHi5UuNsuf7zuVe0dt1Gglx/q9KlpHxPewps7LwtmXC2X89ebp4pc2vmm+F/nAZpP0z5ed+whwtFANX5R5stZGu4/pBB92OtdubbO01Yep2ZedUU6NuX5Sq+T9Rr0qc52lvtGuefa97ygFErdMdUs73d9wADFlHEDRZ8b/WJtsmhmtlPadzDt/LyQmkpKvr38="
},
    {
    "id": "mojave-dusk",
    "name": "Mojave Dusk",
    "author": "gaypotatoemma",
    "image": "themes/Mojave Dusk/mojave-dusk.png",
    "description": "A dark theme inspired by modern versions of Mac OS.",
    "code": "jZZZb9NAEMe/CsozinZn777RhqMSEahUglcnWVLD1hv5KK0Q353xEdvrrA2v/v8894z9e7X1P5In+2pTFT9XV79XX9Ps4H+tr5P9z2Puq+ywuuKgQTFCBH99KX9Mjw9lwxCtNSV6YHx+sHkjcUEkjKT7tHR2l+QTL1MLPdZZUlQRA3Chv8+TQ2qzkraxgtSK0VkKGooyriSYC+rePjfpGG6kAiOiwKeqdGlmV1cgqBQaOCEX3I3zhb2uytJnbViUKcrFEjeqmDKgqJZL9Af/NIKB0iX422JOY7A3+1/0UiW+7HPvXF2yHPvcVp1QQ5WJIA/V465BBIAxo/aFyBAdDooQo2EJuTf7Mn2yUYPzHUahH+eouq1K24yqwV5Ko0Kji1OB+iYtkp1rDWijmaB62Kg3+z3O5o13HtPD3itDtDHo4DY7VeV0HznhwlDRq93g4P4AEf3jPlMmBeUseD6kUu82Y2wsRjOZBjLMn+Bog5IwmqFThBvGFB07iAzZhfeOWQohqKgwAvPkYRQBoQiuSViGsCdMcW1IJJYBG4dz7309cOvbLGnGbQgMLxEDwIuGl48vgdCCXAnBzAAGloDx+i6izxgAcaB31Y0GSOyDYoyMvXSapFQr3mzl4WjDYQMqQHGFpzkiB9XjDCGIWTl3sq6/IALEwMxFcNk8SgVRcvpqb9pwJgmX0Oufc3/MbVFcJ232QiqjmIrpn9DGd+d/1b1ggFdFjkKJnYteCCLUBpeMhW9Gr2mvDkuI2VFGaKDO3JM2en+qTuM+MQGSKiyBmGPWo88kFXhfGPwTxeGi2DIi1QQdfdsnbW/0rc2q2cIFxHwJAmyx0AE5X/Eei9wwg4sBTM3Y/GcnJmDkdC3QQ27I3Xln1/dJht9LzEDirxNw1j3+YBPX2MVDBVQ1JWiErXXWbk5FI2FjjeZn6fPDS5HuE3eXZEd7ODN46qis/6Ta15PjBcKlkZrW57RBbvLke9n6nijvk/LB5l1Yvd1tWuzXb59PNscx2ttmCbFzDIhigsX0O1ucJ4EwXEGpO+qmKkr/uLEOrxnSxbvUYbGwFnk7Xng5BN6+Gfrt46l86WEt8dIIfYY3VZ7sUpeWL/EAv5zSPC13Pjt0+jQ0/3hytrSXXBjUNnn+aJ+su80OWOiy/sRzCrhZUhH2589f"
},
    {
    "id": "velvet-purple",
    "name": "Velvet Purple",
    "author": "punkinpie.",
    "image": "themes/Velvet Purple/velvet-purple.png",
    "description": "A nice dark purple theme.",
    "code": "hVbZbts6EP2Vws+FMeRwzVuTdAlQo0USoPdVtllHuIpoSFSaoOi/d7RYpGzZBfzkczjrmRn9Xtw367d3DyGr3i2ufi9+5OXW/1peZ5v/d5Vvyu3iSnDDjALGzftT+Gu+ewotR1suQEgbOb7auqp/zjUgqBF6zEPh1ll15AW40VyJU9q/LX2usm3uysA6Fv2U5HCWxXt3wCWDU3eP7rXLyCJIy62ZJXxrQpGXbnGFaIy1WiE/4d0UvnbXTQi+XFwxkFwZc4kU82Sg5UV7X/xLy+RcK6usRX2J/F+XDXCURl4mDmaJLazS3MqL7LEGsdIPm8oXRVujinrbtww4ExZnKE/N87qjoGVGA5yhxKDIlGZanOF92IT8xc0Sx5YCKsOZnACjhC1yxaTCCbpqguvlqZlATNucyoAzShQNmAl8m9fZumjfk19kCqWM2v2w2ZAWb3zhh+wER6HZ+8VduW/C8QiisppyGtE4E1Jpqxk/IIdcjZaCMW3S/2eSieCYCw2zYRbAwGksYzO0McJIjtOARrhrO0edOoiNBK0kIM54PwibCdDt+5kQkqJymmAavVanaRSRYSwKQA6QukoMSCU1RxBiJpRIo9eP3rdCW96VWSezGM7RyjlPpK1DG0B3IatIPLKku9ZonCP0e0tIYQSbcxU1gUqQKlIvERvf/8i3O3ciNJoceo0zcCwIl6RGsqPYDC1q4MRTDAKkBKb1EZR4oIFqbwoeU85b/175XeXq+jprBaRsNxfJ+wT/RjZ+Fv5XKyHkFIoSduSdDlACJNoRQot28KaEGJ+lKjGFEzQOIO0CSm/6dpxARncHtTUiyc7vm/3xWQZNa+EsZzm9ihyoa/1Kv8jm/TkXKLk+ZicqIskzpqf4ypXN2fJNGMkmukRLyq2ZpAUtjZhnJsvF0E6EGYNzElWKGWA4bzP2A0DRhbcKLhIPywuZJFEZMBfZMTeFWqLgLf/eF275mJV0O+kIKxI5b2ex+/uLy4rOPmmDM41oB2DlCudu93UH0Y0j4Ryg709vdb7Jivus3LntPGeV7f5Fuamyn6H3LeiLwzApBuRzFp5cNYRF65YpTldlldeb5cfXvatIURvXjWS7ljgpVuIcfu/qQRHkmQZSmYF109TBP9+6gjYcsetPeUFFo1pU/dGmTwcJXJxhf3zeh7eR3LabdRLqyLdNla3zIg9v8wE+7PMqD2tfbgf8ODT/vC9ccKe8aVCr7PWre3HFXbmlQgc/TJCixWMPvtpFHfLphJMwaYkBM1PO+DUzfqT10fQ9WrmcKlnF7wr6+BJWij9//gI="
},
    {
    "id": "oled-black-purple-accent",
    "name": "OLED Black - Purple Accent",
    "author": "theoddball",
    "image": "themes/OLED Black - Purple Accent/oled-black-purple-accent.png",
    "description": "Loosely based on the Material UI Umbra theme. OLED theme with purple accents.",
    "code": "jZbLbts4FIZfZeD1wOD9kl0Tp22AGCnSADNb2WIdoYxoUFSaoOi790i2KVFmlCy8sP/Ph+dO/l7c3V6v/rm0xfbn4uL34r+qLt2v5SV83XnX1uXighGpsEZIoX/P5dtq9xjyjPOl8VnpoQrWbAr/zikRi5Y0EgJJgs+QL74oK1MHPGvoRJFZ6sG89BFpguA4nAfu2mCr2iwuKCGYEM4kOeOurGvMZRuCqzt7CiOsGeVz3BDqR+iv7vkEU04oFXPw/z0ohWBSsVlwMPsROmYik9LvW++s7VLm+/46hoWlziCP7dOmRygmjHP+BjJ4RwVHSr9l6tM2VM8mCw4Vhvg4Q4kQO1ozjLFWIlHXbTDlITeUaqFIosZcYMylIFIjluirqik2tjNAhGZKYTY6/NN2C7155ayb9PpNvW/DZCQVwoIqiaI6NA4ShLHhf+fBDr+PotFEMsbGYrbFp74M1UBUIK1p6tAgQ0GV0mJ8QBQ100ISzTOnR2borakLQ1KpFIh0lmTqxYjo4qCCkCTSfFnOfEnMxIw8ONf13PKmLvqOGxyDZUSU5lDGOYpkqMTGOPZzgOSBeM6xL4iChupGIFrIrudyZ8LM8p/IQ0L6wVZMH7bgBMvU8MTMODGpXNdh0CKMiwky2lZQPY5Z1L95t/OmaS4L31eWC6kllTn9Dmz8sO5XV1pKOEeC6cjFCcJKckRYIiS9A0OgOUqBTJeP1NEEwniSUf5mbpmD927f7t8p1YRZvnlNztJkhn67gL2+NnUb0wc7mFEk88SQCAHLSDCRx5KGYFAnglSeHPKOBVZEZbDsGps0WWIz1oMIBXczcGgWPJr9ID3EphCnSFABPt87a5YPRf3zkEKNGXyOP381hT09AAjlHIujsDbWmNW+6Quju7oQdJS+Pb421baw90W9M2WeWRe795ArX/wI00dZr3wpwqPxJ7c4XL0cwlhXzXZ5/bI3Hjpqa/qR7G5mgiTlNKffm+bYERpRKLQ4Wblqm+CeVsbCegO6+VxZSBrkwk+mNEtfP+3Da4QVPPAwVyd41fpiU9kqvOYd/L6vfBU2ri6P+tQ197S3JphzLnVqXbzcmmdjb+oSEh0OF75iAhaPPp3VLepQpROO4J0nJMIqZeKExQ1z8OZQo7WpIJN+eFgwTRk0+Z8/fwE="
},
    {
    "id": "merry-chrysler",
    "name": "Merry Chrysler",
    "author": "tattlegerp",
    "image": "themes/Merry Chrysler/merry-chrysler.png",
    "description": "A fun christmas theme. Rumour has it you can hear Mariah Carey faintly in the distance if you use this theme.",
    "code": "jZZdb9owFIb/C9cV8vdH71a6tZWGNnWV1tsAHkRLY+Q4XdG0/76TkDgxMbS3vA/H5+P1cf7Olsa5w2LnDlVh3Oz67+xnXm7sn/lNtv69dbYuN7NrRqTCGmEqr6by13y780eGK80YGRjrNk1MRhQjXGiqg/SU+8KsMpc4BSk0xd6PdOeyTW5Kj2fXlHLOGKUSnaUIUEIyghFDZEI9mbe2Io0hkqA4CXyrfZGXBgIRggnhTE4DLQpbmZvae1uG+iC7S9wHSh3R9/b1CEtFoGgsL8HPbVSpGRXsYtTnEFYzLSTRFzN+Dp1ITPDH2tmiaFrmYNTJ2QzIrn5ZJSuPkfNFx9yntc9fTbqMfsIpITg6qS5rb8CtVGosOFI4VkMvMOZSEKkRi/TbvMpWRRuAKqW1HNvr03oN3lzYwnYGwJxKKq5mD+W+9pMr2V+3Th2MQxjMgAalL1ZJpoSWfPx7V8241kFMWvw0lzANhahAWtM4oUFmGGPG0fiAhM8mp4+m3XvrNIVRU6VApIkk4yxGRFMHFYSw8VmDToRmSmHGUCKXKEzoyJO1jefmD2XWOm5IDMdr5jxIws1ghA7gu5HejRCO6txBEYVFLrAeBwkag7I1Pi6yzdZMLaeIUBgl5KEzXAsquEgwYyt0xu6Z0dJLShfCT1wW//+7s1tnquomc+1wuZBaHh+yU/0bxPhV2D/NdClsFtStyZZLbYwgjO2joIcIExkBIxMLwjjGkRouodRCUSRj9cx6PWZv9/V+PKT4VUsx8/FL+XEa/IUZbCvNEZIn9PnptfrSlHVoH9xOLBlNE6ERijcDEDKNDe1OzCMikw9ZjCX8KWExa67OlBHm0cyacsYFugh2YT9ID7UpxCkCs6ur2aMtzPwpK+EBhUogECdNC9uf703WfrkRTSXBkjbPZissTWHM7b5qJfju0Ir10vfdocrXWfGYlVuzSTPLbPsesnDZL388mwmwLuasU+4yvzOuS0tpimHhXs2WebWef37bGweOWpv2SsKsKUGScprSH03Vv0+IwoVsmtFSi7ry9uXWFLDbgK6+5AU0DXrhui83JTlqdnyS/vyy94cAKyHgtVY9fFu7bJUXuT+kE/yxz13uV7bcdPppavZlXxhvplyc1DJ7+2peTfFQbqDRvn/zBSwe3Z/VrGifRzecwXc43AyEVcxMF9Qxm+OMliaHTrrwbQEUZZqzf//+Aw=="
},
    {
    "id": "lulu-pink",
    "name": "Lulu - Pink",
    "author": "murasakiyosei",
    "image": "themes/Lulu - Pink/lulu-pink.png",
    "description": "A fun light pink theme.",
    "code": "jZbbTtwwEIbfhetq5fHZ3JVDKRKrVoDU3mY37hLVxKvEoSDEu3dyTjaH9jb/F3s883vG72d3hSvOzt/PfiRp7P9sLqL970PmizQ+O+dUa6MpIfTTVL5LDk+hZkAzLgaMz2KblZLSYAjRpJMek+DsLspOduGUcc1ginUrGSAgqaQT5CaL4sSmAaqFDEaiwCxStKa4ASb5hHq0r9WJDKWEGW1mgW9FcElqV4936XxuL4oQfFptKIjmivI17j+SNqC/+pcSpkC0MlIyswb/rM6EORZasFWwWRZjMAYXpbBKd5noQ33YZ965MlMZVnj27D3yVDzv6tpSo+hgszHSBYVlk4oascB93ofkxdb1I4oLo/ro28KerlAKnZENkVoJAyN1WwQbL/67agbUr5I82rlyAaoI4YQw1lfg836Plrz0zjcWR99JglHfpscijG4iY1IRYITSTm38IgQ6WQPVrTA9a/+9OQxlUgiNKZJDcfYsp6H0DjlFqnhaX1LJDeUgyXCDmUJOdm8YEEoRoRnh0xD6nKK7KDAMhY+jGBKYUyo0He01qIrUnAlMBJmJpcdAIEWYVpj+R+9Ly21u06gyXB/YSQtaBk+6UAtOVloG6D+2mmkm3SKdpjEvGnh1NeODHTsOncgpMSDVjNxnhuGF0Qp9KWawruDDvlwzTRDk5MugclwaatSJ3luISsVYaeBG/575Q2bz/CIq/SeNkMoopub0b7jGL+f/YPSUUSEImrXj5lpFJwyNYxQApmgM9PEB15RLGKmzvaRTF3pJHb0/Fsfx0PwXs1mcjKv0ZEIO6ME01kobJcf61qbFYvpGxHIiRtjopku8psrAPDnI+1JkE1uiuxUIfN2Q+TW7eoDk2MoUSL0KzrTGFXp4tv6He+/s5jFKq9FpGL6JGNHN5682cs11wmlJQdNG2Fpn7dUxr9OEfZ1x1kjfn97yZB+5+yg92LhhDABXSon29+gwRRi2XgJtRJdZ9Cs0e2tJ8L3XKjdReLJZl3tsx4BhbZN8v7l+PdoMLbW31Z0cPhSn+r3NG0v0T86Kuizy4J+vrMO2hnT+JXGYNcxFFtp6C1I+L2bp6+djeOtgLSWA0C18VWTRLnFJeGsDZPhwYOUbqdIfjkmWhJ1P40Y3BKeALG1Qb+afj84GO+XGQW2j1zv7Yt1tGmOiQz3tNccZTEy7V9mdQzK+4jjwRTn29ZiZXrE6mrpGW5tgJrP+VcEN40bwj4+/"
},
    {
    "id": "yet-another-discord-theme",
    "name": "Yet Another Discord Theme",
    "author": "shinomythmaker",
    "image": "themes/Yet Another Discord Theme/yet-another-discord-theme.png",
    "description": "Another theme inspired by our \"favorite\" chat client, Discord.",
    "code": "jZbJbtswEIZfJfC5MLgvuWVrGqBGi9RA26Nss7ZQWjQkKk1Q9N07lrVRooRc+X+c4Swc8u/ip/FXN5nzB5Nf3afF1uW7q/XBHM3i+u/ie5rt3J/lbbL9vc9dme0W14wozDDRSH4Yy5/T/cFfGCUpQbhjwK7Jo9vXqbdmk+QDL4gRQSQaY52lKeQxT3apyTx+F0VmqbV5rSLSTAtJNI8CX0pv0wxSNt5/Z11hbkvvXba4JowSGbHRg9rwNCXgcA795F7qRBCuJRWz8I/ZIPpga/ZddBs6IZTDmVv42zZ31p4TlENho5XvkEN53ETLECJdxIhzqTib4G62Pn0x8bpO1hOEtn+j6qr05tKbinGsFQ3UWA/AMtypZGMn9t1st9CAd866OuFIcijkh8VTdir94N6N1LpTiKCIUdosjwPs1tsIYmI/gKH/ricw4gJrHR6iljFRQmCs+1Yj3TRyWTMRv132oL3ALwr9Bsltu6uzH0/+yH+HUULgNoGNtXPnblo+ZUnVS92RYKgQzucIGCgEUc3Pvhoq2N9vyzFA4kDrpy57f2+39D3d7U3YOW3mRlqQnt5FGWC9EjYd2DBNCw5dDKoT12u7lBFEUGf0a+72uSmK26Rqbs2FhOkmY/oXMPDLuj/nwlGoChJMt1zsprdC2BlaSoVJAESnYKtGLlJPDUfB5dDuVJ6mX7gYs5x8xmZpMkM35aJCcqxCcWWycjJlATEdfIDNpjggp3PdYu/pxsDmVA0Gejd6ZqAuEuCenTXLdZLBk0alZIJwmDz18ieT2KqllWCcQIpJLayMNeb+VFS5YIhxRWgtfT28Fek2sc9Jtje7hiGKYoF5sz3ZDxCqwC1GVDTIXZ788lViEKGwjlRzqMfk/Lm7SJQwhPn5p7CCv97y4fVkcmiarakuG6VMgFlyjmesP5uiqjtFMEbhgLyxclcW3h3vjYXpBHTxMbWQLMhFfmkm+AtyRNgE/XA8+bcWrh4Qrhr4vsyTTWpT/1YdEHT4VUrKaa1/O6V56jcu29W6RhSmgFCNM3c8WePNmAsPtUpeP5sXY5+yHSTaX55jBdngSDe+ztPWp8NLjIWUGOmQae8RZgoRIZrTXGq0MilkMu89+5oyzdm/f/8B"
},
    {
    "id": "zelda-red",
    "name": "Zelda Red",
    "author": "zeldanakano",
    "image": "themes/Zelda Red/zelda-red.png",
    "description": "A nice dark red theme.",
    "code": "jVbZbtNAFP0V1GcUzb7wRhegEhGoVALx5sTT1GLqiexxaYX4d+7YznibJLzmnNzl3HOv58/FT2Pz7M2dyS/e/bn4XpS5+726zLa/dpVrSviREam4Ykqzt0v4c7F79IGjENGcCTFwXJWbqvs71ggpFKH7wluzyapZFi2oFFQtaecjfayyvDClx8ly5yzSpUOMM4IXrHvz0nWkqYQwKEn40nhblObiHUEUC0KwJAvelXW1uWy8d2VXluBIopO8oVVFGHRKT7I/uecDWQnMlDxF/hGIGivJEWEniTGsZlpIGOtJdlQiMZ5v28pZGySrYNSdTahAWtME5bF52iTHN6Ucb3rKe7/1xXNblpJCQNiRlP2ENQGAMzQBoqOX3QO6bnxYFKIFeIfMg0YtMOZStBab4NdFnW1sG0BophRmo+Tvt1vw5pWzbtbebblv/HwlNZdYUhrRhHE6JDYbRz/8fuhGaJiL5mgCxmYo2JsQziRZ1jJMIw52XNAAc86V0mKcIOGzRfbIGbw1L2EQFc4HIiGSnFYxYoQ+KOzrpNP0WBa1TMJERe6dC55b3ZZZ67ihMDzd+uNE0kVUGDwzIp6NNIkQPAEKwSgTqXp3EAH3TGPBxSjIyDmagKnaE57vzMJyo/s1gwdlQhUkcFO05Op2nFERSWicYVnnzGvzEF8rt6tMXV9mrQaaC6klTeJfIMaDdb/DRCjhHAmmI2+5SiNgYqK4TiNC8qxGtF/F6bWKaHIXD9W7fbM/M6oZZzX6XoaIQsHusrPs1mUKc8b5WL2WfdxFLb42ZXNUvgljEEJLoQVTadrEEELAwVVHAh7XPdL+x6KTmMPnXyhGQRCBThL7sP/JHnpTiFMkqAAR7pw1q/us/BW+PgwCccJo//Mnk9k2PjxZSPgs6B5YG2vM9b5uIQ2mVOwAfX18rYttZu+ycmfyNGed7c5RrqrswXe5GYwruKNHPmb+0VR9WfCYwu1xWxf1dnXzsjcVOGpr2pWklAmuMMEshd+ZunUERVgrGAs/RLlqau+ero2FCwfs+kNhQTTQoprZLMm+edr710geLNSSr5sq2xS28K9tgYBTgiTltMe/7Yuq8BtX5j0OosCtCHPqkrmnvTXeLHnTotbZy2fzbOxtmYPQvv/ygxoc6UOucKh9MdtwhYWUGOkpZ9gwBu/x8BjvqulmtDYFKFnFFwbsA2XwaP/79x8="
},
    {
    "id": "lams-light",
    "name": "Lam's Light",
    "author": "lampookie",
    "image": "themes/Lam's Light/lams-light.png",
    "description": "A light theme inspired by the vanilla light theme in Final Fantasy XIV.",
    "code": "jZbJbtswEIZfpfC5MLgvuTVJmwSIkSIN0F5lm3WEyqJBUVlQ9N07lCVRC+02QC7+Pw2Hw3+G/L24z/bVh/t89+wXF78X3/Nya1+Xl9nm187ZutwuLhhRSqvw/3Eutx8CoxnTEsnIWLc1rpGYYIQx2ktPuS/MOnOTVbCSGvME1keSsAjnQsyQG5dtc1N63ASikmCB+EmKNBRSRMgE9WTemh1piomWRCaBh9oXeWkWF2gmXxW2Mpe197Y8rkMRUpKe4wa1wkphqOM5+ta+/D/8owElUhz+zoJ9WI0YFUifp/sChFPBFLYZ+W8bZ4siVMrBCScdFJHner8+uoRwKDg7gcRNc0URJeIE92nj8xeTBLuDVUiCIYcnAkI0MsWUcj3+bFV7AyYlmnMsBEV4pMZaCAml0CPxOq+yddF8LRRHCmMS9/hpswE/XtnCHvdGCZI0tMBdeaj9rA0JYkToXo2ugZw1Qv13853G39utBJFRrDkeinEniAhOsWLzVOJJJPOJMlWCEjaKP7Cu5ERimVi8Y05nEEsarM0w9DsdJzEioM0lFmS41FCXGrqcUZJIZYDFbJ6sDW5b3pVZ47WYF0wfcDCiQupzGIwfDcUTkkdqFCRMU6gcojgFkGOPcsQJ5ol1WldgrYSmchAh2gVhKRFuJtt2Z077bCYPzKwFkpgkmIQ/OiZmIMEe0PATKYZHEyUGnX751dmdM1V1mbnQYppD9SWVKf0BYvws7OvighJKOEeCxeQGPcM11H8kxMSgchoKP1IHruZMw9mO1NhwjGO4CchITXVcl7k91IfJ0cClJBTDp5jl+CL8X/p4IUowjMZTeng1wc0gyFhfmbI+WboR0dYBZg4mYTGexsatC/HINKWOPF32Hku5Eh4HhFCVjvmv45hw81l1Bp5OE0bBfY+2MMunrPwVWorBaXESXkrNz7cmK0J4eIpA0pL2/MoUxlwfqkaCgaMV66Svz+9VvsmKx6zcmW2aWWW7fyFXLvvpj2szoUWocKvcZP7ZuDatxmEELLHKq83y89vBOPDTxjTNOLzP5vqjqdq+gJWhFYVqqau68nZ/bQoYZkBXX/ICiga1cMdnGTwTOQp3aJL+vD/49x5WQmDMVQdf1y5b50Xu39MJfjvkLvdrW25bfZqa3R8K482cGye1yt7uzYsp7sotFNrb7hkMI0d3a4Wx7PNpf+NwVyE9ZvoXKWYKnCO6bI5ntDI5VNL1jwjNNGWasz9//gI="
},
    {
    "id": "nightfox",
    "name": "Nightfox",
    "author": "codeinclined",
    "image": "themes/Nightfox/nightfox.png",
    "description": "A dark blue theme inspired by the Nightfox Neovim theme.",
    "code": "jZbbTuMwEIbfpdeocnyMuVsoC0h0QYDE3qataa01cZQ4HIR49522SZyDE7jNfJ7DP+NxPmd/9Hbnnu377PRz9qTTjX2bnyXrf9vclulmdkpiHkWYcRadDM03+7OzU4pjTAjiTHjG5huVH0yMMIqoP/6onVGrJG9HASxmAlHMh9j3ni7zZKNV6qJJRzWFgwnX1KN6P1QkAWAkioPAbemMTtXBEWKMIzZM6tzYQp2Vztl0MmCL+0GpLfrKvnqYSCyn4L+HmqIYxVKQSbBxO6pAm55S4mGdW2P2kuXQ6qAIHtmVL6tg5V3EF91vc5f7tXb69ZiWpBLkQb6MusMDNcDQTPSwerAuS6eO0yoFl32nk1MB9oUukpWpHMQkhvi+Z7/Wa5jNc2tsr7zrNCvdvHdZGpEqazU47ct6tAyL9d8D1XhjU8zQp88l0I12QpU5nFVgzgbRRx34FLyoAeqQRUf2nnDjbRnkEg70aO1+5ubXaXKYOJ8YLKOIR1QwQiIyBcI+IkhgJjmV0oMdTxASS4Tw/uoMAfxNTtV0oNZZ/+lJb7ZqfMAG5o5crfvcw4IX9cgMY/f7JIhAsn+i8uiP3eV2m6uiOEvgM+aScQETLkL2Wzj6bOwbCIUJZgyB1g0XWgiNYezSNkBwXzbW4MZorMFLVmdvszIbf4lDzLz1EKJvITyEgu+Pty9VWo6K1SHGy+5gk+J2yHGVG+wns9fx+a36PTCwjSbo8L64t0bNH5P0+BwKGHMqcfX5SiWmyjvCMhaUV4alMkotsuJoilhEeH3mbvdR6HVi7pN0qzYVI2IcMdaEWybbAQINpiJqIpznybPbx8aScimhE6yyXCZup/LKxEB+yujJbKmL9fziPVM5TNJaHW4gOCUYCehOyH6vimokJCJw/3hcUedl4ezLQhnYVEAXv7UB1UCLvJ4zwRCmI/TFS+Y+GjjmoDSLa3hR5slKG+0+wgk+ZDrXbmXTTWXvp2ZfMqOcGnLdpJbJ+416VeY63YDQrnrBKYc9I+tY+83rdNZbsxEXItrPfJvxV4zGCHNeZ3Ps0VJpUDJv/hRggAj84dCvr/8="
},
    {
    "id": "ffxiv-light",
    "name": "FFXIV Light",
    "author": "strongbird",
    "image": "themes/FFXIV Light/ffxiv-light.png",
    "description": "A fairly basic theme to match the in-game Light theme.",
    "code": "jZZNb9s4EIb/ysLnhUEOv3NrkqYNUKNFGuz2KtusI6wiChKVJij633coyZJo02ovPvh9RA5n3hny5+ru7tv9P399yg9PfnX1c/VvXu7dj/V1tvvvULu23K+uOGitQCph/j6Xhw85GCII1WrGuHpv6+5zargCQUfpMfeF3WZ1vIvhRiow4hz7/Uof6myf29LTjmJKS60vU9CvpTWhEs6oR/van4gCMMFEEvjc+iIv7eqKMaEE8DPopnCNvW69d2W3G9EGuNFL3Oycf0B/dC/HpDABjMkl+NvigebguOzFcszpMQ3CAGVqZL/ualcUIVc11nh1BVQRQ1lCf2qft90ppNQcfy4g02m5UUwxeoF7t/P5i02Cx7qiQAQlEAmjj7XEFDGI1U3rbd8JhlIt54WJvGDASBJpt3mTbYvwMUjD0ZScT8C73Q7deOMK1x9NMXRuKOR9WbX+tAnR+4JzNqpRV8yV8aBKEiqUnP8/nUQISTlE4ngQTRgoCueBzEyXimaSJS4uNZmvPonYL0CESmw9MIZyQoCpRCqmhPZtgtvwOIiYAIOH0fOtIt1gxpUkiVAmDNVH54LF1vdl1hlsigcnDuMCR6QWahGEDqTAFQsD7AhGK4UxyjAzmqUASAPjVoMhAGefNpyDmC2SHKH7gz1zGX7MVG/wEznKGyWhvyCBTWXGrYyhcmKmIIDg0Own0UyKdgCDFlSnX89MhC2MnTzqX2p3qG3TXGddDoyQKgyAlP4Z1/heuB9YEWAgBJHcjNzYPacxnnknBUzx4YzBXqaROnRfiI5LOgzEUZ2GKU4gomahu6qtTi7L0QZpZh3diH9MwwI9s5CkOFx4rG9s2U65kwQNSNPENIMWscVcR+SQdKYE+pKKuSmO2Jk/gQoitOb0wppjMciiPqy2DEWj5MEVdv2YleFWxO7AWx6IGf7+aLOiC84wKcIlpQZhYwtrb6umkzQIYsL91Ulfnt6afJcVD1l5sPs0s8kOv0Nu6uy77/fm0khNBR+UD5l/svUQFg5MfDPhR5u82a3fv1a2Rt/sbNd14emFhcILNKU/2GaoOxoMe07qgbppG++eb22BQwzp5i4vMFmYi3p4h2klSHhiJen3z5V/G+Fw8VChj/BtW2fbvMj9WzrAr1Ve537ryv2gn4bmnqvCenvOxUFtstdP9sUW9+UeE+2H+5xLnC3muFeYxT6vTm91qRQNBpgz0xOU4w0WHkV9NH2NNjbHTNbjuwFfaozjRPn1638="
},
    {
    "id": "final-fantasy-blue-theme",
    "name": "Final Fantasy Blue Theme",
    "author": "noxtm",
    "image": "themes/Final Fantasy Blue Theme/final-fantasy-blue-theme.png",
    "description": "A theme based on the Blue theme option in Final Fantasy XIV.",
    "code": "jZbLbts6EIZfJfC6MHi/ZNckTRugRovUQLuVbdYWSouGRKUJir77GcmySEmUT7f6Pw+HM/9w/GfxmBeZvXnMCp9Vbzd3tjY364M5msXtn8X3vNi538u7bPtrX7q62C1uGVFScy45ejeVP+f7gz8ziComVWBcuTNlI2mmhSSa99I699ZssnJ0ikACccamWBeJcKo0w5JMiI9ltstN4XETR2KN1CxCFreCc0GEFFNobV791Ywb4EvtbV5AtSghmBDOEgndW1eZu9p7V3TxsFRKXeP+oV4R/cm99DCB+1wN/eNfo/6Iw/4/3VcCmocYEQiHSnzbls7apmQldLnti4LGIIUSyKE+bpKnDpE4u2E9h9z7rc9fzKU6guuoQZcOEyEYZ2gg9Gae3h7UVe0NGJUqgsGoJO5m7ApCtcYMq5H+kFfZxrYBuOASSxEd/n67BWveO+vO10MEIS7Fu8VTcar9aBohOcox1b16GQ9BEaP08nnq5fC9u0paTPp7nEhoBaUcMYSG2SR8FA64Knan90xwzTiFUFFCheRklEKQGTQM9PiUIGLEiVAhfpRDgEBdO9f4a/lUZK27Qh7w6BApKEXiGgXvDkFUc0UDNYgRP7NTgKSB/pzOA/Fvk+/Jbm/m/TSR4xpqhOF9RyyB9c1SSgrMEAnMxZtNh7AafY/DKxjJZipGSBcahkXDasDh9K+l25emqu6y1vqaC6kllSn9C4T4ad3vxtEUHkskWLhs6snvhchiWMMcUETYAIisLDmHQg7UxJhF6sweOWfvTvVpfgmnmGW0BDGcxkiU6xxLZtl597T6yhT1bOkGxHwRBtjAC0JgzBVLk8kdNcQm1qRCo+avA1XpmNEmi9fULNiFhZeDUc64uE6HuynE4Z2gzbp+dtYs11nxq9kIksJGgzjd508ms23asKFgEWisO2FlrDEPp6qRwPESISY76evhrcq3mX3Oir3ZnRkYG4mpJBdmle3HSBMG1obEHXJfZj99ezfYQlTDVLJO+Zj5gynbtAhiTHOMwO6rvNouP7yeTAl+2pp2HKGDgEjKk/qzqS6OQLA7RFOMlrqvK++OD8bCgwZ09ZhbKBrUojzbDCuwf5NOkv5wPPm3Hg4WauGHusw2uc39WzrBb6e8zP3GFbtOH6fmjidrvJlyw6RW2etn82LsU7GDQvvzOlcM/nEifTmreaB9Pp5uGEOJkR4y/YRhphD8Y7lkc+7RyuRQyTL8bYD3B9rC/v79Dw=="
},
    {
    "id": "ffxiv-default-dark-ui",
    "name": "FFXIV Default Dark UI",
    "author": "skoomy",
    "image": "themes/FFXIV Default Dark UI/ffxiv-default-dark-ui.png",
    "description": "A theme based on the Dark theme option in Final Fantasy XIV",
    "code": "jZbLbtswEEV/pfC6MPh+ZJfEaRugRos0RbuVbdYRwogCRaUJiv57x7Ii6kG5Tna+h5zhzOVQfxarzD+++367uPiz+JEXO/d7eZVtH/fe1cVuccGIwgxTofD7qfw53z+ENOP8zvhG4hohSXUn3efBmk3mx1GElBglsLjTHPLRZ7vcFAGfRZGT1L15aU6kmRaSaJ4EvtTB5oVZXKCJfG1dZa7qEFyxuMCIE6HUKSgeDyPJySn0k3s+kFhigRmTmJ2Cf548RB9stz2TThz929Y7aw+l8dDSpB0i8lA/bRqEYfjTbAaJSSFEiSJohrvchvwZssEU/hHnrJf9bCdBiM4VAmOu2EBd18GAKylBjDFF+HBtV4KDhyTBQ3WVV9nGHpYTjKkmug9cbrfgwGtn3ehu3BZlHcYXDyklKZWdmrhTR2V61Ph74ixR7HdznELCbv08ug6lkmlFSJ4QCIxTQVsmETmWcK4IkVCaMnAIQv0IUT6ZQcRg9b1zB1ctb4us8VRMBw8tPQ+SNPjfnQY7EI61QgKhVKjeLJxskpy4u72Z2kpoRI7TYySnCz/BYusnzIkkRo0jQkvCx0vjvSdMcqp4p3/1bu9NVV1lvlnMhdSyF7qnf4E9fln3++B6Co5HgsU8UmOhE3rGYVzgw8IhkDB2T03OjU6NcwOmApVaMRSzd2Vdzr+7KWY5evbOpI8mhbeGSz6m57vX6GtT1LPlGxDzhRhgc7NySs7XvcPO8edgz64fBGFKBNcEnQTbbc+k49kEBSczguA74M5Zs7zPCngloYJCMU4YbX/+ZDLb7A/eIBjS1q2wNtaYVVk1kkYUjPMmfX14rfJtZu+yYm92aWad7f+HXPvsVzjGZkKDizhrlY9ZeDC+TQtmLRYEvlHWebVd3ryUxoOjtqa5klBtaLeknKb0O1OF41yByHAhhWqp67oK7mllLIw3oKsPuYWiQS380WZYSY4Im6Fvnsrw2sHxLW/gVe2zTW7z8JpO8FuZ+zxsXLFr9XFq7qm0JpgpN0xqnb18Ns/G3hY7KHRon3YmYPDot1iHKR3ycu6bt890NwwzhYgQb9kce7Q2OVTSd58QcA8pDCn29+8/"
}
];