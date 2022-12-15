function sumSkillSlot1 () {
    var totalPointsSkill1 = 0
    
    if($('#select-skill-name').val() == 'none') {
        totalPointsSkill1 = 0
        $('#total-1').html('Total ' + totalPointsSkill1)
    
    } else if($('#select-skill-name').val() != 'select' && $('#select-skill-grade').val() != 'select') {
        var numberOfStats = parseInt($('#select-skill-stats').val())
        var skillLevel = parseInt($('#select-skill-level').val())

        if($('#select-skill-name').val() == 'legend' && $('#select-skill-grade').val() == 'diamond' && $('#select-skill-stats').val() == '4') {
            totalPointsSkill1 = (12 + numberOfStats * skillLevel)
        } else if($('#select-skill-name').val() == 'legend' && $('#select-skill-grade').val() == 'diamond' && $('#select-skill-stats').val() == '3') {
            totalPointsSkill1 = (9 + numberOfStats * skillLevel)
        } else if($('#select-skill-name').val() == 'legend' && $('#select-skill-grade').val() == 'diamond' && $('#select-skill-stats').val() == '2') {
            totalPointsSkill1 = (6 + numberOfStats * skillLevel)
        } else if($('#select-skill-name').val() == 'almighty' && $('#select-skill-grade').val() == 'diamond') {
            totalPointsSkill1 = (15 + numberOfStats * skillLevel)
        } else if($('#select-skill-name').val() == 'pure' && $('#select-skill-grade').val() == 'diamond') {
            totalPointsSkill1 = (3 + numberOfStats * skillLevel)
        } else {
            totalPointsSkill1 = numberOfStats * skillLevel
        }

        if(Number.isInteger(numberOfStats) && Number.isInteger(skillLevel)) {
            $('#total-1').html('Total ' + totalPointsSkill1)
        }
    }
}

function sumSkillSlot2 () {
    var totalPointsSkill2 = 0
    
    if($('#select-skill-name-2').val() == 'none') {
        totalPointsSkill2 = 0
        $('#total-2').html('Total ' + totalPointsSkill2)
    
    } else if($('#select-skill-name-2').val() != 'select' && $('#select-skill-grade-2').val() != 'select') {
        var numberOfStats = parseInt($('#select-skill-stats-2').val())
        var skillLevel = parseInt($('#select-skill-level-2').val())

        if($('#select-skill-name-2').val() == 'legend' && $('#select-skill-grade-2').val() == 'diamond' && $('#select-skill-stats-2').val() == '4') {
            totalPointsSkill2 = (12 + numberOfStats * skillLevel)
        } else if($('#select-skill-name-2').val() == 'legend' && $('#select-skill-grade-2').val() == 'diamond' && $('#select-skill-stats-2').val() == '3') {
            totalPointsSkill2 = (9 + numberOfStats * skillLevel)
        } else if($('#select-skill-name-2').val() == 'legend' && $('#select-skill-grade-2').val() == 'diamond' && $('#select-skill-stats-2').val() == '2') {
            totalPointsSkill2 = (6 + numberOfStats * skillLevel)
        } else if($('#select-skill-name-2').val() == 'almighty' && $('#select-skill-grade-2').val() == 'diamond') {
            totalPointsSkill2 = (15 + numberOfStats * skillLevel)
        } else if($('#select-skill-name-2').val() == 'pure' && $('#select-skill-grade-2').val() == 'diamond') {
            totalPointsSkill2 = (3 + numberOfStats * skillLevel)
        } else {
            totalPointsSkill2 = numberOfStats * skillLevel
        }
        
        if(Number.isInteger(numberOfStats) && Number.isInteger(skillLevel)) {
            $('#total-2').html('Total ' + totalPointsSkill2)
        }
    }
}

function sumSkillSlot3 () {
    var totalPointsSkill3 = 0
    
    if($('#select-skill-name-3').val() == 'none') {
        totalPointsSkill3 = 0
        $('#total-3').html('Total ' + totalPointsSkill3)
    
    } else if($('#select-skill-name-3').val() != 'select' && $('#select-skill-grade-3').val() != 'select') {
        var numberOfStats = parseInt($('#select-skill-stats-3').val())
        var skillLevel = parseInt($('#select-skill-level-3').val())

        if($('#select-skill-name-3').val() == 'legend' && $('#select-skill-grade-3').val() == 'diamond' && $('#select-skill-stats-3').val() == '4') {
            totalPointsSkill3 = (12 + numberOfStats * skillLevel)
        } else if($('#select-skill-name-3').val() == 'legend' && $('#select-skill-grade-3').val() == 'diamond' && $('#select-skill-stats-3').val() == '3') {
            totalPointsSkill3 = (9 + numberOfStats * skillLevel)
        } else if($('#select-skill-name-3').val() == 'legend' && $('#select-skill-grade-3').val() == 'diamond' && $('#select-skill-stats-3').val() == '2') {
            totalPointsSkill2 = (6 + numberOfStats * skillLevel)
        } else if($('#select-skill-name-3').val() == 'almighty' && $('#select-skill-grade-3').val() == 'diamond') {
            totalPointsSkill3 = (15 + numberOfStats * skillLevel)
        } else if($('#select-skill-name-3').val() == 'pure' && $('#select-skill-grade-3').val() == 'diamond') {
            totalPointsSkill3 = (3 + numberOfStats * skillLevel)
        } else {
            totalPointsSkill3 = numberOfStats * skillLevel
        }
        
        if(Number.isInteger(numberOfStats) && Number.isInteger(skillLevel)) {
            $('#total-3').html('Total ' + totalPointsSkill3)
        }
    }
}

$('#select-skill-name').change(function() {
    sumSkillSlot1()
    
    $('#select-skill-grade').attr('disabled', true)
    $('#select-skill-stats').attr('disabled', true)
    $('#select-skill-level').attr('disabled', true)

    if($('#select-skill-name').val() == 'legend') {
        $('#select-skill-grade').attr('disabled', false)
        
        $('#select-skill-grade').html(['<option value="select">Select the skill grade</option>', 
        '<option value="diamond">Diamond</option>'])
        
        $('#select-skill-grade').change(function() {
            sumSkillSlot1()

            if($('#select-skill-grade').val() != 'select') {
                $('#select-skill-stats').attr('disabled', false)

                $('#select-skill-stats').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="4">4 stats boosted</option>',
                                               '<option value="3">3 stats boosted</option>',
                                               '<option value="2">2 stats boosted</option>'])
                
                $('#select-skill-stats').change(function() {
                    $('#select-skill-level').attr('disabled', false)
                    sumSkillSlot1()

                    $('#select-skill-level').change(function() {
                        sumSkillSlot1()
                    })
                })
            }
        })
    } else if($('#select-skill-name').val() == 'almighty') {
        $('#select-skill-grade').attr('disabled', false)
        
        $('#select-skill-grade').html(['<option value="select">Select the skill grade</option>', 
        '<option value="diamond">Diamond</option>',
        '<option value="gold">Gold</option>'])
        
        $('#select-skill-grade').change(function() {
            sumSkillSlot1()

            if($('#select-skill-grade').val() != 'select') {
                $('#select-skill-stats').attr('disabled', false)

                $('#select-skill-stats').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="5">5 stats boosted</option>'])

                $('#select-skill-stats').change(function() {
                    $('#select-skill-level').attr('disabled', false)
                    sumSkillSlot1()

                    $('#select-skill-level').change(function() {
                        sumSkillSlot1()
                    })
                })
            }
        })
    } else if($('#select-skill-name').val() == 'master') {
        $('#select-skill-grade').attr('disabled', false)
        
        $('#select-skill-grade').html(['<option value="select">Select the skill grade</option>',
        '<option value="gold">Gold</option>'])
        
        $('#select-skill-grade').change(function() {
            sumSkillSlot1()

            if($('#select-skill-grade').val() != 'select') {
                $('#select-skill-stats').attr('disabled', false)

                $('#select-skill-stats').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="4">4 stats boosted</option>'])
                
                $('#select-skill-stats').change(function() {
                    $('#select-skill-level').attr('disabled', false)
                    sumSkillSlot1()

                    $('#select-skill-level').change(function() {
                        sumSkillSlot1()
                    })
                })
            }
        })
    } else if($('#select-skill-name').val() == 'elite') {
        $('#select-skill-grade').attr('disabled', false)
        
        $('#select-skill-grade').html(['<option value="select">Select the skill grade</option>',
        '<option value="gold">Gold</option>'])
        
        $('#select-skill-grade').change(function() {
            sumSkillSlot1()

            if($('#select-skill-grade').val() != 'select') {
                $('#select-skill-stats').attr('disabled', false)

                $('#select-skill-stats').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="3">3 stats boosted</option>'])
                
                $('#select-skill-stats').change(function() {
                    $('#select-skill-level').attr('disabled', false)
                    sumSkillSlot1()

                    $('#select-skill-level').change(function() {
                        sumSkillSlot1()
                    })
                })
            }
        })
    } else if($('#select-skill-name').val() == 'combo') {
        $('#select-skill-grade').attr('disabled', false)
        
        $('#select-skill-grade').html(['<option value="select">Select the skill grade</option>',
        '<option value="gold">Gold</option>'])
        
        $('#select-skill-grade').change(function() {
            sumSkillSlot1()

            if($('#select-skill-grade').val() != 'select') {
                $('#select-skill-stats').attr('disabled', false)

                $('#select-skill-stats').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="2">2 stats boosted</option>'])
                
                $('#select-skill-stats').change(function() {
                    $('#select-skill-level').attr('disabled', false)
                    sumSkillSlot1()

                    $('#select-skill-level').change(function() {
                        sumSkillSlot1()
                    })
                })
            }
        })
    } else if($('#select-skill-name').val() == 'pure') {
        $('#select-skill-grade').attr('disabled', false)
        
        $('#select-skill-grade').html(['<option value="select">Select the skill grade</option>',
        '<option value="diamond">Diamond</option>',
        '<option value="gold">Gold</option>'])
        
        $('#select-skill-grade').change(function() {
            sumSkillSlot1()

            if($('#select-skill-grade').val() != 'select') {
                $('#select-skill-stats').attr('disabled', false)

                $('#select-skill-stats').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="1">1 stat boosted</option>'])
                
                $('#select-skill-stats').change(function() {
                    $('#select-skill-level').attr('disabled', false)
                    sumSkillSlot1()

                    $('#select-skill-level').change(function() {
                        sumSkillSlot1()
                    })
                })
            }
        })
    }
})

$('#select-skill-name-2').change(function() {
    sumSkillSlot2()

    $('#select-skill-grade-2').attr('disabled', true)
    $('#select-skill-stats-2').attr('disabled', true)
    $('#select-skill-level-2').attr('disabled', true)

    if($('#select-skill-name-2').val() == 'legend') {
        $('#select-skill-grade-2').attr('disabled', false)
        
        $('#select-skill-grade-2').html(['<option value="select">Select the skill grade</option>', 
        '<option value="diamond">Diamond</option>'])
        
        $('#select-skill-grade-2').change(function() {
            sumSkillSlot2()

            if($('#select-skill-grade-2').val() != 'select') {
                $('#select-skill-stats-2').attr('disabled', false)

                $('#select-skill-stats-2').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="4">4 stats boosted</option>',
                                               '<option value="3">3 stats boosted</option>',
                                               '<option value="2">2 stats boosted</option>'])
                
                $('#select-skill-stats-2').change(function() {
                    $('#select-skill-level-2').attr('disabled', false)
                    sumSkillSlot2()

                    $('#select-skill-level-2').change(function() {
                        sumSkillSlot2()
                    })
                })
            }
        })
    } else if($('#select-skill-name-2').val() == 'almighty') {
        $('#select-skill-grade-2').attr('disabled', false)
        
        $('#select-skill-grade-2').html(['<option value="select">Select the skill grade</option>', 
        '<option value="diamond">Diamond</option>',
        '<option value="gold">Gold</option>'])
        
        $('#select-skill-grade-2').change(function() {
            sumSkillSlot2()

            if($('#select-skill-grade-2').val() != 'select') {
                $('#select-skill-stats-2').attr('disabled', false)

                $('#select-skill-stats-2').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="5">5 stats boosted</option>'])
                
                $('#select-skill-stats-2').change(function() {
                    $('#select-skill-level-2').attr('disabled', false)
                    sumSkillSlot2()

                    $('#select-skill-level-2').change(function() {
                        sumSkillSlot2()
                    })
                })
            }
        })
    } else if($('#select-skill-name-2').val() == 'master') {
        $('#select-skill-grade-2').attr('disabled', false)
        
        $('#select-skill-grade-2').html(['<option value="select">Select the skill grade</option>',
        '<option value="gold">Gold</option>'])
        
        $('#select-skill-grade-2').change(function() {
            sumSkillSlot2()

            if($('#select-skill-grade-2').val() != 'select') {
                $('#select-skill-stats-2').attr('disabled', false)

                $('#select-skill-stats-2').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="4">4 stats boosted</option>'])
                
                $('#select-skill-stats-2').change(function() {
                    $('#select-skill-level-2').attr('disabled', false)
                    sumSkillSlot2()

                    $('#select-skill-level-2').change(function() {
                        sumSkillSlot2()
                    })
                })
            }
        })
    } else if($('#select-skill-name-2').val() == 'elite') {
        $('#select-skill-grade-2').attr('disabled', false)
        
        $('#select-skill-grade-2').html(['<option value="select">Select the skill grade</option>',
        '<option value="gold">Gold</option>'])
        
        $('#select-skill-grade-2').change(function() {
            sumSkillSlot2()

            if($('#select-skill-grade-2').val() != 'select') {
                $('#select-skill-stats-2').attr('disabled', false)

                $('#select-skill-stats-2').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="3">3 stats boosted</option>'])
                
                $('#select-skill-stats-2').change(function() {
                    $('#select-skill-level-2').attr('disabled', false) 
                    sumSkillSlot2()
                    
                    $('#select-skill-level-2').change(function() {
                        sumSkillSlot2()
                    })
                })
            }
        })
    } else if($('#select-skill-name-2').val() == 'combo') {
        $('#select-skill-grade-2').attr('disabled', false)
        
        $('#select-skill-grade-2').html(['<option value="select">Select the skill grade</option>',
        '<option value="gold">Gold</option>'])
        
        $('#select-skill-grade-2').change(function() {
            sumSkillSlot2()

            if($('#select-skill-grade-2').val() != 'select') {
                $('#select-skill-stats-2').attr('disabled', false)

                $('#select-skill-stats-2').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="2">2 stats boosted</option>'])
                
                $('#select-skill-stats-2').change(function() {
                    $('#select-skill-level-2').attr('disabled', false)
                    sumSkillSlot2()

                    $('#select-skill-level-2').change(function() {
                        sumSkillSlot2()
                    })
                })
            }
        })
    } else if($('#select-skill-name-2').val() == 'pure') {
        $('#select-skill-grade-2').attr('disabled', false)
        
        $('#select-skill-grade-2').html(['<option value="select">Select the skill grade</option>',
        '<option value="diamond">Diamond</option>',
        '<option value="gold">Gold</option>'])
        
        $('#select-skill-grade-2').change(function() {
            sumSkillSlot2()
            
            if($('#select-skill-grade-2').val() != 'select') {
                $('#select-skill-stats-2').attr('disabled', false)

                $('#select-skill-stats-2').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="1">1 stat boosted</option>'])
                
                $('#select-skill-stats-2').change(function() {
                    $('#select-skill-level-2').attr('disabled', false)
                    sumSkillSlot2()

                    $('#select-skill-level-2').change(function() {
                        sumSkillSlot2()
                    })
                })
            }
        })
    }
})

$('#select-skill-name-3').change(function() {
    sumSkillSlot3()

    $('#select-skill-grade-3').attr('disabled', true)
    $('#select-skill-stats-3').attr('disabled', true)
    $('#select-skill-level-3').attr('disabled', true)

    if($('#select-skill-name-3').val() == 'legend') {
        $('#select-skill-grade-3').attr('disabled', false)
        
        $('#select-skill-grade-3').html(['<option value="select">Select the skill grade</option>', 
        '<option value="diamond">Diamond</option>'])
        
        $('#select-skill-grade-3').change(function() {
            sumSkillSlot3()

            if($('#select-skill-grade-3').val() != 'select') {
                $('#select-skill-stats-3').attr('disabled', false)

                $('#select-skill-stats-3').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="4">4 stats boosted</option>',
                                               '<option value="3">3 stats boosted</option>',
                                               '<option value="2">2 stats boosted</option>'])
                
                $('#select-skill-stats-3').change(function() {
                    $('#select-skill-level-3').attr('disabled', false)
                    sumSkillSlot3()

                    $('#select-skill-level-3').change(function() {
                        sumSkillSlot3()
                    })
                })
            }
        })
    } else if($('#select-skill-name-3').val() == 'almighty') {
        $('#select-skill-grade-3').attr('disabled', false)
        
        $('#select-skill-grade-3').html(['<option value="select">Select the skill grade</option>', 
        '<option value="diamond">Diamond</option>',
        '<option value="gold">Gold</option>'])
        
        $('#select-skill-grade-3').change(function() {
            sumSkillSlot3()
            
            if($('#select-skill-grade-3').val() != 'select') {
                $('#select-skill-stats-3').attr('disabled', false)

                $('#select-skill-stats-3').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="5">5 stats boosted</option>'])
                
                $('#select-skill-stats-3').change(function() {
                    $('#select-skill-level-3').attr('disabled', false)
                    sumSkillSlot3()

                    $('#select-skill-level-3').change(function() {
                        sumSkillSlot3()
                    })
                })
            }
        })
    } else if($('#select-skill-name-3').val() == 'master') {
        $('#select-skill-grade-3').attr('disabled', false)
        
        $('#select-skill-grade-3').html(['<option value="select">Select the skill grade</option>',
        '<option value="gold">Gold</option>'])
        
        $('#select-skill-grade-3').change(function() {
            sumSkillSlot3()
            
            if($('#select-skill-grade-3').val() != 'select') {
                $('#select-skill-stats-3').attr('disabled', false)

                $('#select-skill-stats-3').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="4">4 stats boosted</option>'])
                
                $('#select-skill-stats-3').change(function() {
                    $('#select-skill-level-3').attr('disabled', false)
                    sumSkillSlot3()

                    $('#select-skill-level-3').change(function() {
                        sumSkillSlot3()
                    })
                })
            }
        })
    } else if($('#select-skill-name-3').val() == 'elite') {
        $('#select-skill-grade-3').attr('disabled', false)
        
        $('#select-skill-grade-3').html(['<option value="select">Select the skill grade</option>',
        '<option value="gold">Gold</option>'])
        
        $('#select-skill-grade-3').change(function() {
            sumSkillSlot3()
            
            if($('#select-skill-grade-3').val() != 'select') {
                $('#select-skill-stats-3').attr('disabled', false)

                $('#select-skill-stats-3').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="3">3 stats boosted</option>'])
                
                $('#select-skill-stats-3').change(function() {
                    $('#select-skill-level-3').attr('disabled', false)
                    sumSkillSlot3()
                    
                    $('#select-skill-level-3').change(function() {
                        sumSkillSlot3()
                    })
                })
            }
        })
    } else if($('#select-skill-name-3').val() == 'combo') {
        $('#select-skill-grade-3').attr('disabled', false)
        
        $('#select-skill-grade-3').html(['<option value="select">Select the skill grade</option>',
        '<option value="gold">Gold</option>'])
        
        $('#select-skill-grade-3').change(function() {
            sumSkillSlot3()
            
            if($('#select-skill-grade-3').val() != 'select') {
                $('#select-skill-stats-3').attr('disabled', false)

                $('#select-skill-stats-3').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="2">2 stats boosted</option>'])
                
                $('#select-skill-stats-3').change(function() {
                    $('#select-skill-level-3').attr('disabled', false)
                    sumSkillSlot3()

                    $('#select-skill-level-3').change(function() {
                        sumSkillSlot3()
                    })
                })
            }
        })
    } else if($('#select-skill-name-3').val() == 'pure') {
        $('#select-skill-grade-3').attr('disabled', false)
        
        $('#select-skill-grade-3').html(['<option value="select">Select the skill grade</option>',
        '<option value="diamond">Diamond</option>',
        '<option value="gold">Gold</option>'])
        
        $('#select-skill-grade-3').change(function() {
            sumSkillSlot3()
            
            if($('#select-skill-grade-3').val() != 'select') {
                $('#select-skill-stats-3').attr('disabled', false)

                $('#select-skill-stats-3').html(['<option value="select">Select the number of boosted stats</option>', 
                                               '<option value="1">1 stat boosted</option>'])
                
                $('#select-skill-stats-3').change(function() {
                    $('#select-skill-level-3').attr('disabled', false)
                    sumSkillSlot3()

                    $('#select-skill-level-3').change(function() {
                        sumSkillSlot3()
                    })
                })
            }
        })
    }
})

window.addEventListener('change', event => {
    var total1 = parseInt($('#total-1').text().split('Total ')[1])
    var total2 = parseInt($('#total-2').text().split('Total ')[1])
    var total3 = parseInt($('#total-3').text().split('Total ')[1])

    if(Number.isInteger(total1) && Number.isInteger(total2) && Number.isInteger(total3)) {
        $('#total-points-counter').html('Total points ' + (total1 + total2 + total3))
    }
})

